# Kitchen Sink [![renovate-app badge][renovate-badge]][renovate-app] [![semantic-release][semantic-image] ][semantic-url]

![kitchensink](https://cloud.githubusercontent.com/assets/1268976/14084252/e309e370-f4e7-11e5-9562-24f516563ac9.gif)

This is an example app used to showcase [Cypress.io](https://www.cypress.io/) testing. The application uses every API command in Cypress for demonstration purposes. Additionally this example app is configured to run tests in various CI platforms. The [tests](https://github.com/cypress-io/cypress-example-kitchensink/blob/master/cypress/integration) are also heavily commented. For a full reference of our documentation, go to [docs.cypress.io](https://docs.cypress.io/).

To see the kitchen sink application, visit [example.cypress.io](https://example.cypress.io/).

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

## CI status

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://link.cypress.io/kitchensink-amplify-oneclick)

CI | Build status | basic config file | full parallel config
:--- | :--- | :--- | :---
AWS Amplify Console | | [amplify.yml](amplify.yml) |
AWS CodeBuild | | [basic/buildspec.yml](./basic/buildspec.yml) | [buildspec.yml](buildspec.yml)
AppVeyor | [![AppVeyor CI](https://ci.appveyor.com/api/projects/status/bo4x59pha1eb18de?svg=true)](https://ci.appveyor.com/project/cypress-io/cypress-example-kitchensink) | [appveyor.yml](appveyor.yml)
Azure CI | [![Build Status](https://cypress-io.visualstudio.com/cypress-example-kitchensink/_apis/build/status/cypress-io.cypress-example-kitchensink?branchName=master)](https://cypress-io.visualstudio.com/cypress-example-kitchensink/_build/latest?definitionId=2&branchName=master) | [basic/azure-ci.yml](basic/azure-ci.yml) | [azure-ci.yml](azure-ci.yml)
Buddy | | [buddy.yml](buddy.yml)
Buildkite | | [.buildkite/pipeline.yml](.buildkite/pipeline.yml)
Circle | [![CircleCI](https://circleci.com/gh/cypress-io/cypress-example-kitchensink/tree/master.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-kitchensink/tree/master) | [basic/.circleci/config.yml](basic/.circleci/config.yml) | [.circleci/config.yml](.circleci/config.yml)
Codeship Pro | | [basic/codeship-pro](basic/codeship-pro)
GitHub Actions | [![Parallel tests status](https://github.com/cypress-io/cypress-example-kitchensink/workflows/Cypress%20parallel%20tests/badge.svg?branch=master)](https://github.com/cypress-io/cypress-example-kitchensink/actions) | [single.yml](.github/workflows/single.yml) | [parallel.yml](.github/workflows/parallel.yml)
GitLab | [![GitLab CI](https://gitlab.com/cypress-io/cypress-example-kitchensink/badges/master/pipeline.svg)](https://gitlab.com/cypress-io/cypress-example-kitchensink/commits/master) | [basic/.gitlab-ci.yml](basic/.gitlab-ci.yml) | [.gitlab-ci.yml](.gitlab-ci.yml)
Heroku CI | | [basic/app.json](basic/app.json) |
Jenkins | | [basic/Jenkinsfile](basic/Jenkinsfile) | [Jenkinsfile](Jenkinsfile)
Netlify | [![Netlify Status](https://api.netlify.com/api/v1/badges/016bd76b-ebfd-4071-94d9-8668afbb56f7/deploy-status)](https://app.netlify.com/sites/cypress-example-kitchensink/deploys) | [netlify.toml](netlify.toml) |
Semaphore v2 | [![Project dashboard](https://cypress-io.semaphoreci.com/badges/cypress-example-kitchensink/branches/master.svg)](https://cypress-io.semaphoreci.com/projects/cypress-example-kitchensink) | [basic/.semaphore.yml](basic/.semaphore.yml) | [.semaphore/semaphore.yml](.semaphore/semaphore.yml)
Shippable | [![Shippable CI](https://api.shippable.com/projects/56c38fdc1895ca4474743010/badge?branch=master)](https://app.shippable.com/github/cypress-io/cypress-example-kitchensink) | [shippable.yml](shippable.yml)
Travis | [![Travis CI](https://travis-ci.org/cypress-io/cypress-example-kitchensink.svg?branch=master)](https://travis-ci.org/cypress-io/cypress-example-kitchensink) | [basic/.travis.yml](basic/.travis.yml) | [.travis.yml](.travis.yml)

You can find all CI results recorded on the [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/4b7344/runs)

If you are looking for BitBucket Pipelines example, check out [bitbucket.org/cypress-io/cypress-example-kitchensink](https://bitbucket.org/cypress-io/cypress-example-kitchensink).

## Cypress on CI Workshop

Cypress team has created a full workshop showing how to run Cypress on popular CI providers. Find the workshop at [github.com/cypress-io/cypress-workshop-ci](https://github.com/cypress-io/cypress-workshop-ci).

## CI Community Examples

CI | Url
:--- | :--- |
IBM Cloud CI | [Cloud Foundry](https://github.com/iamgollum/cypress-example-kitchensink/tree/281-ibm-cloud-pipeline)
GitLab CI | [Example caching when installing using Yarn](https://gitlab.com/bahmutov/cypress-yarn-gitlab-ci-example)
CodeFresh | [bahmutov/cypress-codefresh-example](https://github.com/bahmutov/cypress-codefresh-example)

## Help + Testing

**If you get stuck, here is more help:**

* [Gitter Chat](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)

### 1. Fork this repo

If you want to experiment with running this project in Continous Integration, you'll need to [fork](https://github.com/cypress-io/cypress-example-kitchensink#fork-destination-box) it first.

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
## launch the cypress test runner
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
