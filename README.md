# Kitchen Sink [![renovate-app badge][renovate-badge]][renovate-app] [![semantic-release][semantic-image] ][semantic-url]

This is an example app used to showcase [Cypress.io](https://www.cypress.io/) End-to-End (E2E) testing. The application demonstrates the use of most [Cypress API commands](https://on.cypress.io/api). Additionally this example app is configured to run E2E tests in various CI platforms.
Several workflows demonstrate the CI use of [Cypress Docker images](https://github.com/cypress-io/cypress-docker-images) which provide convenient, pre-configured compatible environments for Cypress.
The [tests](https://github.com/cypress-io/cypress-example-kitchensink/tree/master/cypress/e2e) are also heavily commented.

To see the kitchen sink application, and to view the [Cypress API commands](https://on.cypress.io/api) demonstrated by the app, visit [example.cypress.io](https://example.cypress.io/).

For a full reference of our documentation, go to [docs.cypress.io](https://docs.cypress.io/).

For an example payment application demonstrating real-world usage of Cypress.io End-to-End (E2E) testing, go to the [cypress-io/cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app) repository.

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot
[renovate-app]: https://renovatebot.com/
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

## CI Status

The following table lists live workflows from various CI providers. These each independently test the contents of this example repository. They run and record using [Cypress Cloud](https://on.cypress.io/guides/cloud/introduction) with their results displaying centrally under Cypress Cloud [ProjectId `4b7344`](https://cloud.cypress.io/#/projects/4b7344/runs). Each CI provider shows its build status on its own site:

| CI Provider                                            | Workflow                                       | Build Status                                                            |   Docker example   |
| :----------------------------------------------------- | :--------------------------------------------- | :---------------------------------------------------------------------- | :----------------: |
| [AppVeyor][AppVeyor docs]                              | [appveyor.yml][AppVeyor workflow]              | [![AppVeyor CI][AppVeyor badge]][AppVeyor log]                          |                    |
| [CircleCI][CircleCi docs]                              | [.circleci/config.yml][CircleCI workflow]      | [![CircleCI][CircleCI badge]][CircleCI log]                             | :white_check_mark: |
| [**cypress-io/github-action**][Cy GitHub Actions docs] | [using-action.yml][Cy GitHub Actions workflow] | [![Cypress GHA status][Cy GitHub Actions badge]][Cy GitHub Actions log] |                    |
| [GitHub Actions][GHA docs]                             | [single.yml][GHA workflow single]              | [![Single tests status][GHA badge single]][GHA log single]              |                    |
| [GitHub Actions][GHA docs]                             | [parallel.yml][GHA workflow parallel]          | [![Parallel tests status][GHA badge parallel]][GHA log parallel]        |                    |

<!-- CI provider links -->
[AppVeyor docs]:            https://www.appveyor.com/docs/
[AppVeyor badge]:           https://ci.appveyor.com/api/projects/status/bo4x59pha1eb18de/branch/master?svg=true
[AppVeyor log]:             https://ci.appveyor.com/project/cypress-io/cypress-example-kitchensink
[AppVeyor workflow]:        appveyor.yml

[CircleCI docs]:            https://circleci.com/docs/
[CircleCI badge]:           https://circleci.com/gh/cypress-io/cypress-example-kitchensink/tree/master.svg?style=shield
[CircleCI log]:             https://circleci.com/gh/cypress-io/cypress-example-kitchensink/tree/master
[CircleCI workflow]:        .circleci/config.yml

[Cy GitHub Actions docs]:   https://github.com/cypress-io/github-action#readme
[Cy GitHub Actions badge]:  https://github.com/cypress-io/cypress-example-kitchensink/actions/workflows/using-action.yml/badge.svg
[Cy GitHub Actions log]:    https://github.com/cypress-io/cypress-example-kitchensink/actions/workflows/using-action.yml?query=branch%3Amaster
[Cy GitHub Actions workflow]:  .github/workflows/using-action.yml

[GHA docs]:      https://docs.github.com/en/actions
[GHA badge single]:     https://github.com/cypress-io/cypress-example-kitchensink/actions/workflows/single.yml/badge.svg
[GHA badge parallel]:     https://github.com/cypress-io/cypress-example-kitchensink/actions/workflows/parallel.yml/badge.svg
[GHA log single]:       https://github.com/cypress-io/cypress-example-kitchensink/actions/workflows/single.yml?query=branch%3Amaster
[GHA log parallel]:       https://github.com/cypress-io/cypress-example-kitchensink/actions/workflows/parallel.yml?query=branch%3Amaster
[GHA workflow single]:  .github/workflows/single.yml
[GHA workflow parallel]:  .github/workflows/parallel.yml

You can find all CI results recorded on the Cypress Cloud
[![Cypress Cloud](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/4b7344/master&style=flat&logo=cypress)](https://cloud.cypress.io/projects/4b7344/runs)

## CI Workflow Examples

This table shows additional examples of CI workflows. With the exception of GitHub Actions workflows, these are **not** live examples as in the table above and they may require modification before use. The GitHub Actions workflows are live and they run without recording to Cypress Cloud.

| CI Provider                                           | Basic Config                                             | Full Parallel Config                                 |   Docker example   |
| :---------------------------------------------------- | :------------------------------------------------------- | :--------------------------------------------------- | :----------------: |
| [AWS Amplify][AWS Amplify docs]                       | [amplify.yml](amplify.yml)                               |                                                      |                    |
| [AWS CodeBuild][AWS CodeBuild docs]                   | [basic/buildspec.yml](./basic/buildspec.yml)             | [buildspec.yml](buildspec.yml)                       |                    |
| [Azure Pipelines][Azure Pipelines docs]               | [basic/azure-ci.yml](basic/azure-ci.yml)                 | [azure-ci.yml](azure-ci.yml)                         |                    |
| [Buddy.works][Buddy.works docs]                       | [buddy.yml](buddy.yml)                                   |                                                      | :white_check_mark: |
| [Buildkite][Buildkite docs]                           | [.buildkite/pipeline.yml](.buildkite/pipeline.yml)       |                                                      |                    |
| [CircleCI][CircleCi docs]                             | [basic/.circleci/config.yml](basic/.circleci/config.yml) |                                                      | :white_check_mark: |
| [CloudBees CodeShip Pro][CloudBees CodeShip Pro docs] | [basic/codeship-pro](basic/codeship-pro)                 | [codeship-services.yml](codeship-services.yml)     | :white_check_mark: |
| [GitHub Actions][GHA docs]                            | [chrome.yml](.github/workflows/chrome.yml)               |                                                      |                    |
| [GitHub Actions][GHA docs]                            | [chrome-docker.yml](.github/workflows/chrome-docker.yml) |                                                      | :white_check_mark: |
| [GitLab][GitLab docs]                                 | [basic/.gitlab-ci.yml](basic/.gitlab-ci.yml)             | [.gitlab-ci.yml](.gitlab-ci.yml)                     | :white_check_mark: |
| [Jenkins][Jenkins docs]                               | [basic/Jenkinsfile](basic/Jenkinsfile)                   | [Jenkinsfile](Jenkinsfile)                           | :white_check_mark: |
| [Semaphore 2.0][Semaphore 2.0 docs]                   | [basic/.semaphore.yml](basic/.semaphore.yml)             | [.semaphore/semaphore.yml](.semaphore/semaphore.yml) |                    |
| [Travis CI][Travis CI docs]                           | [basic/.travis.yml](basic/.travis.yml)                   | [.travis.yml](.travis.yml)                           |                    |

<!-- CI provider doc links -->
[AWS Amplify docs]:             https://docs.amplify.aws/
[AWS CodeBuild docs]:           https://docs.aws.amazon.com/codebuild/
[Azure Pipelines docs]:         https://learn.microsoft.com/en-us/azure/devops/pipelines/
[Buddy.works docs]:             https://buddy.works/docs
[Buildkite docs]:               https://buildkite.com/docs
[CloudBees CodeShip Pro docs]:  https://docs.cloudbees.com/docs/cloudbees-codeship/
[GitLab docs]:                  https://docs.gitlab.com/ee/ci/yaml/
[Jenkins docs]:                 https://www.jenkins.io/doc/
[Semaphore 2.0 docs]:           https://docs.semaphoreci.com/
[Travis CI docs]:               https://docs.travis-ci.com/

The Cypress documentation page [CI Provider Examples](https://docs.cypress.io/guides/continuous-integration/ci-provider-examples) provides some more examples with extensive guides for using Cypress with some of the most popular CI providers.

## Run Tests

### Local testing

To run the tests from this repo on your local machine, first make sure your machine meets the [Cypress System Requirements](https://on.cypress.io/guides/getting-started/installing-cypress#System-requirements), including the installation of [Node.js](https://docs.cypress.io/guides/getting-started/installing-cypress#Installing-Nodejs) according to the version specified in the file [.node-version](./.node-version).

Executing the following instructions will clone the repository, install dependencies and run Cypress:

```shell
git clone https://github.com/cypress-io/cypress-example-kitchensink.git
cd cypress-example-kitchensink
npm ci # install dependencies
npm run local:run # run Cypress headlessly
```

`local:run` is a [package.json](./package.json) script that starts a local webserver and then uses [cypress run](https://docs.cypress.io/guides/guides/command-line#cypress-run) to run Cypress headlessly.
If you would like to run Cypress tests interactively, then run the following command which uses [cypress open](https://docs.cypress.io/guides/guides/command-line#cypress-open) to run Cypress in headed mode. You can pick individual tests to run.

```shell
npm run local:open
```

As an alternative to using the `local:open` and `local:run` scripts, you can also start the server in one step and then run Cypress in a second step.

```shell
npm start # start server on port 8080
```

You can check that the server is running if you open a web browser and navigate to `http://localhost:8080`.

Then in a separate terminal window execute either

```shell
npx cypress run # for headless mode
```

or

```shell
npx cypress open # for headed interactive mode
```

#### Script and server structure

The scripts `local:run` and `local:open` use the `start-test` alias of the npm module [start-server-and-test](https://www.npmjs.com/package/start-server-and-test) to run [./scripts/start.js](./scripts/start.js), which starts the webserver, waits for it to become ready, and then launches Cypress.

The `start` script spawns a webserver using the npm module [serve](https://www.npmjs.com/package/serve) and displays the Kitchen Sink App on port `8080`.

### Docker testing

If you have Docker installed locally, for instance using [Docker Desktop](https://docs.docker.com/desktop/), you can run the tests from this repo interactively in a Docker container.
Use [Cypress Docker images](https://github.com/cypress-io/cypress-docker-images), which are built with all the prerequisites for running Cypress. They are available as [base](https://github.com/cypress-io/cypress-docker-images/tree/master/base), [browsers](https://github.com/cypress-io/cypress-docker-images/tree/master/browsers) and [included](https://github.com/cypress-io/cypress-docker-images/tree/master/included) options from [Docker Hub](https://hub.docker.com/u/cypress) and the [Amazon ECR (Elastic Container Registry) Public Gallery](https://gallery.ecr.aws/cypress-io).

As above, start by cloning the repo and installing dependencies:

```shell
git clone https://github.com/cypress-io/cypress-example-kitchensink
cd cypress-example-kitchensink
npm ci
```

NOTE: For simplicity, the Docker examples below use a repository reference such as `cypress/base` with the `latest` version tag. To select an earlier version, replace `latest` with an explicit tag, for example `cypress/base:20.15.1`. Explicit version tags are recommended for production. Usage is further explained in the [Tags](https://github.com/cypress-io/cypress-docker-images/blob/master/README.md#tags) section of the [Cypress Docker Images - README](https://github.com/cypress-io/cypress-docker-images/blob/master/README.md).

#### cypress/base

The following example uses a [cypress/base](https://github.com/cypress-io/cypress-docker-images/tree/master/base) image which itself contains no browsers. You will use the Electron browser bundled with Cypress instead. To run the Docker container, execute the following:

```shell
docker run -it --rm -v .:/app -w /app cypress/base:latest
```

When the container prompt appears, enter:

```shell
npx cypress install     # install Cypress binary
npm run test:ci         # start server and run tests in Electron browser
exit
```

#### cypress/browsers

With a [cypress/browsers](https://github.com/cypress-io/cypress-docker-images/tree/master/browsers) image you have the additional choice of Chrome, Edge and Firefox browsers. Execute the following:

```shell
docker run -it --rm -v .:/app -w /app cypress/browsers:latest
```

When the container prompt appears, enter:

```shell
npx cypress install     # install Cypress binary
npm run test:ci         # start server and run tests in Electron browser
npm run test:ci:chrome  # start server and run tests in Chrome browser
npm run test:ci:edge    # start server and run tests in Edge browser
npm run test:ci:firefox # start server and run tests in Firefox browser
exit
```

#### cypress/included

The [cypress/included](https://github.com/cypress-io/cypress-docker-images/tree/master/included) images add a full Cypress installation compared to [cypress/browsers](https://github.com/cypress-io/cypress-docker-images/tree/master/browsers).
Execute the following to run the container with a one-line command, testing with the Chrome browser:

```shell
docker run -it --rm -v .:/app -w /app --entrypoint bash cypress/included:latest -c 'npm run test:ci:chrome' # use for matching Cypress versions
```

Replace the `latest` tag in the above command using the Cypress version from the repo's [package.json](./package.json), if this repository has not yet been updated to the latest released Cypress version.
Note that mismatched versions will cause errors.

NOTE: Additional browsers Chrome, Edge and Firefox are only installed in `linux/amd64` architecture images `cypress/browsers` and `cypress/included`. Browsers are not available pre-installed for `linux/arm64` architecture images. The Electron browser, which is built-in to Cypress, is available in all images and architectures.

### CI Testing

If you would like to try out running tests in a Continuous Integration (CI) provider then you need to first [fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) so that you have your own copy. Refer to the [GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#configuring-git-to-sync-your-fork-with-the-upstream-repository) to set up aliases for `remote upstream` (to this repo) and `remote origin` (to your fork) correctly.
You will also need to have an account with the CI provider you want to test with.

## Documentation

- Use the [Cypress Documentation](https://on.cypress.io) for instructions on how to use Cypress
- Read the [Command Line Guide](https://on.cypress.io/guides/guides/command-line) for run options
- Refer to the [API](https://on.cypress.io/api/) documents to understand the Cypress API calls tested in this repo
- Read [Installing Cypress](https://on.cypress.io/installing-cypress) for step-by-step information on installing Cypress in your own project

## Support

- For "how-to" questions and discussions, go to the Cypress [Discord Chat](https://on.cypress.io/discord) and be part of the worldwide user community!

## Contributing

Check out the [Contributing Guideline](./CONTRIBUTING.md).

## Changelog

See [Releases](https://github.com/cypress-io/cypress-example-kitchensink/releases).
