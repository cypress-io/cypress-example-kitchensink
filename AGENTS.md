# cypress-example-kitchensink — AGENTS.md

## Overview

An example application demonstrating most of the [Cypress API](https://on.cypress.io/api), published to [example.cypress.io](https://example.cypress.io/). It serves two audiences at once, and changes have to work for both:

- **Users**, who read it as a reference for Cypress usage and for CI configuration across many providers.
- **The Cypress monorepo**, [cypress-io/cypress](https://github.com/cypress-io/cypress), which consumes this repository directly. See below — this is the part that is easy to break without noticing.

`app/` and `cypress/` are the source of truth for the example content. The copies inside `@packages/example` in the Cypress monorepo are generated from here, so changes start in this repository.

## How the Cypress monorepo depends on this repository

Two independent paths, both of which can break from a change here:

**1. The published npm package.** `cypress-example-kitchensink` is published from this repository by semantic-release. `@packages/example` pins it as a devDependency and copies its `cypress/` and `app/` folders: `cypress/` ships inside the Cypress binary and seeds new users' projects, and `app/` is deployed to example.cypress.io. See [What ships, and where](#what-ships-and-where). If publishing stops working, the Cypress release process quietly stalls the next time someone tries to bump it.

**2. A direct git clone during Cypress CI.** Cypress's pipeline clones this repository and runs it against a freshly built binary, in `test-kitchensink`, `test-kitchensink-against-staging`, and `test-binary-against-kitchensink` with Electron, Chrome, and Firefox variants. The definitions live in `.circleci/src/pipeline/@pipeline.yml` in that repository.

That second path invokes this repository's files by name, which makes them a contract:

- **npm scripts.** The pipeline runs `npm run build --if-present`, `npm run types --if-present`, `npm start --if-present`, and `npm run e2e`. There is deliberately no `types` script — adding one opts this repository into a type check it is not set up for. `test-kitchensink` additionally runs `yarn --production --ignore-engines` and `yarn start`.
- **`.node-version`.** Cypress reads it with `nvm install $(cat .node-version)`, so it has to stay a string nvm accepts.
- **npm, not yarn.** Cypress's install step branches on whether `yarn.lock` exists. Adding one silently switches it from `npm install --legacy-peer-deps` to `yarn --frozen-lockfile` plus `yarn add -D`, changing how the binary under test gets installed.
- **Branch names.** Cypress checks out `release/<next-cypress-version>` if such a branch exists here and falls back to `master`, so `master` is usually what its CI tests.

### What ships, and where

The npm package contains only `app/` and `cypress/` (the `"files"` field in `package.json`), plus the `package.json`, `README.md`, and `LICENSE` that npm always adds. The monorepo's `packages/example/bin/build.ts` copies those two folders out of the installed package, and `convert.ts` then rewrites `http://localhost:8080` to `https://example.cypress.io` in `app/**/*.html` and `cypress/e2e/**/*.js`. From there:

| Path | Where it ends up |
| :--- | :--- |
| `app/` | Every file is revision-hashed by the monorepo's gulp build and deployed publicly to example.cypress.io. It is not part of the binary. |
| `cypress/` | Ships inside every Cypress binary, because `@packages/example` publishes its `cypress` folder. |
| `cypress/e2e/` | Copied into a user's project when they choose to scaffold example specs. The Cypress app also treats these paths as its example specs, for instance in its test counts, so adding, renaming, or removing a spec changes what it recognizes. |
| Everything else | Not published. It reaches Cypress only through the CI clone described above. |

What follows from that:

- **Keep `app/` and `cypress/` to example content.** Any other file there is shipped to every Cypress user or published on example.cypress.io: READMEs, notes, scratch files, editor or tool configuration, and agent guidance such as `AGENTS.md`, `CLAUDE.md`, or `.claude/`.
- **Put tooling and documentation at the repository root**, which `"files"` leaves out of the package. Guidance for a particular folder belongs in this file, not in a nested agent file.
- **Write `cypress/e2e/` specs for a brand-new project.** Scaffolded specs run against example.cypress.io with the user's own config, which registers no tasks and sets no `env` or `expose` values. A spec that relies on this repository's `cypress.config.js` has to degrade gracefully without it, as the `cy.task()` example in `misc.cy.js` does. Use `http://localhost:8080`, which `convert.ts` rewrites, or a public host for any URL.
- **Keep example.cypress.io working for specs already released.** Every released Cypress version scaffolds its own copy of `cypress/e2e/`, and those copies run against the current example.cypress.io. Changing a class, id, text, or behavior that an older spec asserts on breaks the examples for everyone on those versions, so keep the old hook alongside the new one: the Aliasing table's buttons still gain `btn-success` when clicked, though nothing styles it. To check, unpack the latest published package (`npm pack cypress-example-kitchensink@latest`), copy its `package/cypress/e2e/` to `cypress/e2e-released/` so the specs' relative `require` paths still resolve, and run `npx cypress run --config specPattern='cypress/e2e-released/**/*.cy.js'` against `npm start`.
- **Publish only from a clean checkout.** `"files"` includes everything under the listed folders, even git-ignored test output such as `cypress/screenshots/`, `cypress/videos/`, and `cypress/downloads/`. CircleCI publishes from a fresh clone, so only a local `npm publish` would pick these up; `npm pack --dry-run` lists what would ship.

## The app

`app/` is static HTML, CSS, and plain JavaScript, with no build step and no runtime library other than highlight.js. Every page loads `styles.css` and `scripts.js`, and every visitor to example.cypress.io downloads them, so keep them small: no frameworks, CDNs, or web fonts.

- **The class names look like Bootstrap 3, but there is no Bootstrap.** `container`, `col-xs-*`, `navbar`, `collapse`, `.in`, `.open`, `popover`, and the rest are styled by the foundation section of `styles.css` and toggled by `scripts.js` through `data-toggle="collapse"`, `"dropdown"`, and `"popover"`. The specs depend on that markup, so keep the class names.
- **`styles.css` is ordered** as `--cy-*` color tokens, `--ks-*` semantic roles, the foundation, then the theme. The tokens are a subset of the Cypress Design System palette: copy values from https://design.cypress.io/colors.css rather than inventing new colors. The site is dark only, with 4px corners and spacing on a 4px grid.
- **Floats are contained with clearfix pseudo-elements, not `display: flow-root`.** `flow-root` would make `.navbar-collapse` a new formatting context, which steps aside from the floated `.navbar-header` and shifts the nav links, and the wide-screen `display: block !important` that keeps the nav open would override it anyway.
- **`scripts.js` runs on every page,** so its handlers must tolerate elements a page does not have. The Files page shares `.fixture-btn` with Network Requests but has no `.network-comment`; update elements through `querySelectorAll`, which matches nothing harmlessly, rather than assigning to the result of `querySelector`.
- **The network demo requests stay form-encoded** with `URLSearchParams`, because `network_requests.cy.js` checks the request body as text.

## Writing examples

- **Every spec has a copy on its page.** The code in `cypress/e2e/2-advanced-examples/<name>.cy.js` is shown in a `<pre><code class="javascript">` block on `app/commands/<name>.html`, or on `app/utilities.html` and `app/cypress-api.html` for those specs. Change both, and HTML-escape the page copy: `=>` becomes `=&gt;`.
- **Check the installed Cypress, not memory.** `node_modules/cypress/types/cypress.d.ts` lists the current commands. Cypress 16 removed `cy.exec()` (use `cy.task()`), `.end()`, and `Cypress.env()` (use `cy.env()` for sensitive values and `Cypress.expose()` for public ones). The binary keeps stubs that throw for each, so `typeof cy.exec` still reports `'function'`.
- **Lint forbids skipped tests.** `mocha/no-pending-tests` also catches `this.skip()`, so a test that cannot run its body in some projects logs and returns instead, as the `cy.task()` example does. `cy.pause()` is shown on the Misc page but commented out in its spec, so running the examples in `cypress open` never stops on it.
- **Avoid third-party pages.** A cross-origin example needs a second origin that differs from both `localhost:8080` and example.cypress.io. `cy.origin()` uses design.cypress.io, which loads no third-party scripts, and asserts on the URL rather than on page content this repository does not control. The jsonplaceholder.cypress.io API is fine, but its HTML pages load highlight.js from cdnjs, and where that host is blocked the page throws and fails the test.
- **Check browser versions before working around them.** The `cypress/browsers` image tag in the workflows names the Chrome and Firefox versions CI runs. `cy.press()` needs Firefox 135 or later, and the `.shadow()` demo uses declarative shadow DOM.

## Changing styles safely

Several specs depend on exact geometry, so a visual change can fail a test without anything looking wrong:

- **`#action-canvas` keeps square corners.** The click spec targets the canvas's exact corners, and a rounded corner lets the click land on the panel behind it.
- **`.action-labels` stays on one line inside its panel** at Cypress's default 1000x660 viewport. The spec clicks every label, and each opens a popover below it that would cover a label on a wrapped second row.
- **`.hidden` stays `display: none !important`.** Specs and `scripts.js` toggle it.
- **The navbar collapses below 768px,** which `viewport.cy.js` checks, and `#navbar` must keep its height on wide screens, where the same spec asserts it is visible.
- **The Actions page's scroll containers and opacity cover** keep their sizes.

Screenshots do not catch every regression: a nav whose box has collapsed to zero height still draws its links in place, yet fails `viewport.cy.js`. After a CSS change, run the full suite with the server up (`npm start`, then `npx cypress run`, or `npm run local:run`), since `npm run e2e` does not start the server.

## Linting

```bash
npm run lint       # eslint
npm run lint:fix   # eslint --fix
```

`npm run build` is an alias for `npm run lint` — there is no compile step. The `pre-commit` hook runs it too.

ESLint covers more than JavaScript. `eslint.config.mjs` registers separate languages for `**/*.{,m}js`, `**/*.json` (excluding `package-lock.json`), `**/*.yml`, and `app/**/*.html`. In JavaScript, the brace style puts `else` on its own line after the closing `}`.

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
- `basic/.circleci/config.yml` is the repository's single CircleCI example and the only place the [Cypress CircleCI orb](https://on.cypress.io/circleci-orb) is demonstrated. Keep it on the orb, and keep it to one example.

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
