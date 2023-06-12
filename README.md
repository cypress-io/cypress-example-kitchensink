# Kitchen Sink [![renovate-app badge][renovate-badge]][renovate-app] [![semantic-release][semantic-image] ][semantic-url]

This is an example app used to showcase [Cypress.io](https://www.cypress.io/) testing. The application uses every API command in Cypress for demonstration purposes. Additionally this example app is configured to run tests in various CI platforms. The [tests](https://github.com/cypress-io/cypress-example-kitchensink/tree/master/cypress/e2e) are also heavily commented. For a full reference of our documentation, go to [docs.cypress.io](https://docs.cypress.io/).

To see the kitchen sink application, visit [example.cypress.io](https://example.cypress.io/).

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

## CI Status

The following table lists live workflows from various CI providers. These each independently test the contents of this example repository. They run and record using [Cypress Cloud](https://on.cypress.io/guides/cloud/introduction) with their results displaying centrally under Cypress Cloud [ProjectId `4b7344`](https://cloud.cypress.io/#/projects/4b7344/runs). Each CI provider shows its build status on its own site:

CI Provider |  Workflow | Build Status |
:--- | :--- | :--- |
[AppVeyor][AppVeyor docs] | [appveyor.yml][AppVeyor workflow] | [![AppVeyor CI][AppVeyor badge]][AppVeyor log] |
[CircleCI][CircleCi docs] |  [.circleci/config.yml][CircleCI workflow] | [![CircleCI][CircleCI badge]][CircleCI log] |
[**cypress-io/github-action**][Cy GitHub Actions docs] | [using-action.yml][Cy GitHub Actions workflow] | [![Cypress GHA status][Cy GitHub Actions badge]][Cy GitHub Actions log]
[GitHub Actions][GitHub Actions docs] | [parallel.yml][GitHub Actions workflow] | [![Parallel tests status][GitHub Actions badge]][GitHub Actions log]
[Netlify][Netlify docs]  | [netlify.toml][Netlify workflow] | [![Netlify Status][Netlify badge]][Netlify log]

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
[Cy GitHub Actions workflow]:  https://github.com/cypress-io/cypress-example-kitchensink/actions/workflows/using-action.yml

[GitHub Actions docs]:      https://docs.github.com/en/actions
[GitHub Actions badge]:     https://github.com/cypress-io/cypress-example-kitchensink/actions/workflows/parallel.yml/badge.svg
[GitHub Actions log]:       https://github.com/cypress-io/cypress-example-kitchensink/actions/workflows/parallel.yml?query=branch%3Amaster
[GitHub Actions workflow]:  .github/workflows/parallel.yml

[Netlify docs]:             https://docs.netlify.com/
[Netlify badge]:            https://api.netlify.com/api/v1/badges/016bd76b-ebfd-4071-94d9-8668afbb56f7/deploy-status?branch=master
[Netlify log]:              https://app.netlify.com/sites/cypress-example-kitchensink/deploys
[Netlify workflow]:         netlify.toml

You can find all CI results recorded on the Cypress Cloud
[![Cypress Cloud](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/4b7344/master&style=flat&logo=cypress)](https://cloud.cypress.io/projects/4b7344/runs)
## CI Workflow Examples

This table shows additional documentation-only examples of CI workflows. These are **not** live examples as in the table above and they may require modification before use.

CI Provider |  Basic Config | Full Parallel Config
:--- |  :--- | :---
[AWS Amplify][AWS Amplify docs] | [amplify.yml](amplify.yml) |
[AWS CodeBuild][AWS CodeBuild docs] | [basic/buildspec.yml](./basic/buildspec.yml) | [buildspec.yml](buildspec.yml)
[Azure Pipelines][Azure Pipelines docs] | [basic/azure-ci.yml](basic/azure-ci.yml) | [azure-ci.yml](azure-ci.yml)
[Buddy.works][Buddy.works docs] | [buddy.yml](buddy.yml)
[Buildkite][Buildkite docs] | [.buildkite/pipeline.yml](.buildkite/pipeline.yml)
[CircleCI][CircleCi docs]  | [basic/.circleci/config.yml](basic/.circleci/config.yml)
[CloudBees CodeShip Pro][CloudBees CodeShip Pro docs] | [basic/codeship-pro](basic/codeship-pro)
[GitHub Actions][GitHub Actions docs] |  [single.yml](.github/workflows/single.yml)
[GitLab][GitLab docs] | [basic/.gitlab-ci.yml](basic/.gitlab-ci.yml) | [.gitlab-ci.yml](.gitlab-ci.yml)
[Jenkins][Jenkins docs] | [basic/Jenkinsfile](basic/Jenkinsfile) | [Jenkinsfile](Jenkinsfile)
[Semaphore 2.0][Semaphore 2.0 docs] | [basic/.semaphore.yml](basic/.semaphore.yml) | [.semaphore/semaphore.yml](.semaphore/semaphore.yml)
[Travis CI][Travis CI docs] | [basic/.travis.yml](basic/.travis.yml) | [.travis.yml](.travis.yml)

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

## CI Community Examples

CI | Link
:--- | :--- |
IBM Cloud CI (legacy) | [Cloud Foundry](https://github.com/iamgollum/cypress-example-kitchensink/tree/281-ibm-cloud-pipeline)
GitLab CI (legacy) | [Example caching when installing using Yarn](https://gitlab.com/bahmutov/cypress-yarn-gitlab-ci-example)
CodeFresh (legacy) | [bahmutov/cypress-codefresh-example](https://github.com/bahmutov/cypress-codefresh-example)

## Help + Testing

**If you get stuck, here is more help:**

* [Discord Chat](https://on.cypress.io/discord) to connect to our community
* [Cypress Docs](https://on.cypress.io)

### 1. Fork this repo

If you want to experiment with running this project in Continuous Integration, you'll need to [fork](https://github.com/cypress-io/cypress-example-kitchensink#fork-destination-box) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-example-kitchensink.git

## cd into the cloned repo
cd cypress-example-kitchensink

## install the node_modules
npm install

## start the local webserver
npm start
```

The `npm start` script will spawn a webserver on port `8080` which hosts the Kitchen Sink App.

You can verify this by opening your browser and navigating to: [`http://localhost:8080`](http://localhost:8080)

You should see the Kitchen Sink App up and running. We are now ready to run Cypress tests.

```bash
# launch the cypress test runner
npm run cy:open
```

**shortcut:** you can use command `npm run local:open` that uses [start-server-and-test](https://github.com/bahmutov/start-server-and-test) to start local server and open Cypress. When you close Cypress, the local server is stopped automatically. Similarly you can use `npm run local:run` to start the server, run Cypress tests headlessly and close the server.

### 2. Install & write tests in Cypress

[Follow these instructions to install and write tests in Cypress.](https://on.cypress.io/installing-cypress)

## Contributing

Check out the [Contributing Guideline](/CONTRIBUTING.md).

## Changelog

- after v1.0.4 at [cypress-example-kitchensink/releases](https://github.com/cypress-io/cypress-example-kitchensink/releases)
- before at [CHANGELOG_OLD.md](CHANGELOG_OLD.md)
