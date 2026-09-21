# cypress-example-kitchensink — AGENTS.md

## Overview

An example application demonstrating most of the [Cypress API](https://on.cypress.io/api), published to [example.cypress.io](https://example.cypress.io/). It serves two audiences at once, and changes have to work for both:

- **Users**, who read it as a reference for Cypress usage and for CI configuration across many providers.
- **The Cypress monorepo**, [cypress-io/cypress](https://github.com/cypress-io/cypress), which consumes this repository directly. See below — this is the part that is easy to break without noticing.

`app/` and `cypress/` are the source of truth for the example content. The copies inside `@packages/example` in the Cypress monorepo are generated from here, so changes start in this repository.

## How the Cypress monorepo depends on this repository

Two independent paths, both of which can break from a change here:

**1. The published npm package.** `cypress-example-kitchensink` is published from this repository by semantic-release. `@packages/example` pins it as a devDependency and copies `cypress/` and `app/` into the Cypress binary and into example.cypress.io. If publishing stops working, the Cypress release process quietly stalls the next time someone tries to bump it.

**2. A direct git clone during Cypress CI.** Cypress's pipeline clones this repository and runs it against a freshly built binary, in `test-kitchensink`, `test-kitchensink-against-staging`, and `test-binary-against-kitchensink` with Electron, Chrome, and Firefox variants. The definitions live in `.circleci/src/pipeline/@pipeline.yml` in that repository.

That second path invokes this repository's files by name, which makes them a contract:

- **npm scripts.** The pipeline runs `npm run build --if-present`, `npm run types --if-present`, `npm start --if-present`, and `npm run e2e`. There is deliberately no `types` script — adding one opts this repository into a type check it is not set up for. `test-kitchensink` additionally runs `yarn --production --ignore-engines` and `yarn start`.
- **`.node-version`.** Cypress reads it with `nvm install $(cat .node-version)`, so it has to stay a string nvm accepts.
- **npm, not yarn.** Cypress's install step branches on whether `yarn.lock` exists. Adding one silently switches it from `npm install --legacy-peer-deps` to `yarn --frozen-lockfile` plus `yarn add -D`, changing how the binary under test gets installed.
- **Branch names.** Cypress checks out `release/<next-cypress-version>` if such a branch exists here and falls back to `master`, so `master` is usually what its CI tests.

## Linting

```bash
npm run lint       # eslint
npm run lint:fix   # eslint --fix
```

`npm run build` is an alias for `npm run lint` — there is no compile step. The `pre-commit` hook runs it too.

ESLint covers more than JavaScript. `eslint.config.mjs` registers separate languages for `**/*.{,m}js`, `**/*.json` (excluding `package-lock.json`), `**/*.yml`, and `app/**/*.html`.

**The consequence worth remembering:** `.github/workflows/*.yml` is linted, `npm run build` runs that lint, and Cypress's binary jobs run `npm run build` inside their clone of this repository. A YAML style violation in a workflow file therefore fails CI in the Cypress monorepo, not only here. Run `npm run lint` before pushing workflow changes.

The YAML rules are `yml/indent` at 2, `yml/key-spacing`, `yml/no-multiple-empty-lines` capped at 1, and `yml/spaced-comment`. Note the glob is `*.yml` — a file named `.yaml` is not linted at all.

## CI

Tests run in GitHub Actions and record to Cypress Cloud [project `4b7344`](https://cloud.cypress.io/projects/4b7344/runs):

| Workflow | Coverage |
| :--- | :--- |
| `using-action.yml` | `cypress-io/github-action`, Electron, one job plus parallel 4x |
| `browsers.yml` | Chrome and Firefox on Linux (load balanced) and Windows |
| `parallel.yml` | Electron, parallel 2x, caching demonstrated by hand |
| `single.yml` | Electron, one container |
| `chrome.yml`, `chrome-docker.yml` | Non-recorded Chrome examples, the second inside a Cypress Docker image |

Things to know before editing them:

- **Triggers are `push` on `master` plus `pull_request`.** A PR from a fork therefore runs here, in this repository's Actions, and its checks appear on the pull request. Triggering only on `push` would run them in the contributor's fork instead, where the upstream pull request never sees them.
- **Recording jobs need the fork guard**, which has to cover both events:

  ```yaml
  if: github.repository_owner == 'cypress-io' && (github.event_name != 'pull_request' || github.event.pull_request.head.repo.full_name == github.repository)
  ```

  The first clause stops recording jobs running in someone's fork of this repository; the second stops them running for a pull request whose code comes from a fork. A fork has no record key, and on a `pull_request` event `github.repository_owner` is this repository's owner, so the owner check alone is not enough. The jobs that do not record — `Chrome`, `Chrome (Docker)`, and `Single (non-recording)` — carry no guard and are the coverage a fork pull request actually gets.
- **Each test workflow ends in a `gate` job** whose name matches the workflow. It runs under `if: always()` and fails only when a job it needs failed or was cancelled, so a skipped recording job does not fail it. These are the names branch protection requires, which keeps required checks stable when a matrix changes and gives a fork pull request a definite result rather than a skipped one. Add a new job to a workflow and it belongs in that gate's `needs`.
- **The required checks** are therefore `Browsers`, `Using Cypress GH Action`, `Cypress parallel tests`, `Cypress single tests`, `Chrome`, `Chrome (Docker)`, `Lint Title`, and the `license/cla` status. Do not require a matrix job such as `Linux chrome (1)` directly, and do not require a `cypress: <group>` status — the group names change and never appear on a fork pull request.
- **Cypress Cloud group names become commit statuses** named `cypress: <group>`. Two runs recording the same group name against one commit overwrite each other's status, so keep group names unique across workflows.
- **Parallel groups must stay in one workflow file.** The `ci-build-id` is derived from the GitHub run, so splitting a group across workflows breaks load balancing.
- **Recorded browser jobs run in a `cypress/browsers` container** so the browser major versions are pinned. A runner image tracks whatever Chrome and Firefox ship that month, which drifts ahead of the versions a Cypress release supports and breaks the run. Renovate keeps the image tag current. Windows runners cannot use a container, so the Windows jobs in `browsers.yml` remain exposed to that drift.
- **`.circleci/config.yml` no longer runs tests.** It publishes the npm package and nothing else.
- The provider configs at the repository root and under `basic/` (Jenkins, Travis, GitLab, Semaphore, Azure, Buildkite, and others) are **documentation**. Only the GitHub Actions workflows and the CircleCI publish job actually run.

## Releases

semantic-release publishes from `master` via `.circleci/config.yml`. None of its recognized configuration filenames is present, so it runs on defaults: commit-analyzer, release-notes-generator, npm, and github. Commit messages therefore decide the version, and a `fix:` or `feat:` landing on `master` publishes a new package that the Cypress monorepo can then pin.

`.release.json` is not a semantic-release configuration filename and is not read by it.

PR titles are validated by `semantic-pull-request` with `validateSingleCommit: true`, so a single-commit PR needs a conventional commit message as well as a conventional title.

## Local development

```bash
npm ci                    # installs deps and the Cypress binary
npm start                 # serves app/ on http://localhost:8080
npm run local:open        # starts the server, then opens Cypress
npm run local:run         # starts the server, then runs headlessly
```

Use `CYPRESS_INSTALL_BINARY=0 npm ci` when you only need to lint or inspect the repository — it skips the binary download entirely, which is a large saving in a container.

Node has to satisfy `engines.node` in `package.json`; `.node-version` names the version CI uses.
