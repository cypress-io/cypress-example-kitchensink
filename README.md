# Kitchen Sink [![renovate-app badge][renovate-badge]][renovate-app]

![kitchensink](https://cloud.githubusercontent.com/assets/1268976/14084252/e309e370-f4e7-11e5-9562-24f516563ac9.gif)

This is an example app used to showcase [Cypress.io](https://www.cypress.io/) testing. The application uses every API command in Cypress for demonstration purposes. Additionally this example app is configured to run tests in various CI platforms. The [tests](https://github.com/cypress-io/cypress-example-kitchensink/blob/master/cypress/integration/examples) are also heavily commented. For a full reference of our documentation, go to [docs.cypress.io](https://docs.cypress.io/).

To see the kitchen sink application, visit [example.cypress.io](https://example.cypress.io/).

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

## CI status

CI | Build status | basic config file | full parallel config
:--- | :--- | :--- | :---
AppVeyor | [![AppVeyor CI](https://ci.appveyor.com/api/projects/status/bo4x59pha1eb18de?svg=true)](https://ci.appveyor.com/project/cypress-io/cypress-example-kitchensink) | [appveyor.yml](appveyor.yml)
Azure CI | [![Build Status](https://cypress-io.visualstudio.com/cypress-example-kitchensink/_apis/build/status/cypress-io.cypress-example-kitchensink?branchName=master)](https://cypress-io.visualstudio.com/cypress-example-kitchensink/_build/latest?definitionId=2&branchName=master) | [basic/azure-ci.yml](basic/azure-ci.yml) | [azure-ci.yml](azure-ci.yml)
Buildkite | | [.buildkite/pipeline.yml](.buildkite/pipeline.yml)
Circle | [![Circle CI](https://circleci.com/gh/cypress-io/cypress-example-kitchensink.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-kitchensink) | [basic/circle.yml](basic/circle.yml) | [circle.yml](circle.yml)
Codeship Pro | [ ![Codeship Pro CI](https://app.codeship.com/projects/8d6a20c0-b70e-0133-41c6-56e5cd60fbd0/status?branch=master)](https://app.codeship.com/projects/134609) | [basic/codeship-pro](basic/codeship-pro)
GitLab | [![GitLab CI](https://gitlab.com/cypress-io/cypress-example-kitchensink/badges/master/pipeline.svg)](https://gitlab.com/cypress-io/cypress-example-kitchensink/commits/master) | [basic/.gitlab-ci.yml](basic/.gitlab-ci.yml) | [.gitlab-ci.yml](.gitlab-ci.yml)
Heroku CI | | [basic/app.json](basic/app.json) |
Jenkins | | [basic/Jenkinsfile](basic/Jenkinsfile) | [Jenkinsfile](Jenkinsfile)
Semaphore v2 | [Project dashboard](https://cypress-io.semaphoreci.com/projects/cypress-example-kitchensink) | [basic/.semaphore.yml](basic/.semaphore.yml) | [.semaphore/semaphore.yml](.semaphore/semaphore.yml)
Shippable | [![Shippable CI](https://api.shippable.com/projects/56c38fdc1895ca4474743010/badge?branch=master)](https://app.shippable.com/github/cypress-io/cypress-example-kitchensink) | [shippable.yml](shippable.yml)
Travis | [![Travis CI](https://travis-ci.org/cypress-io/cypress-example-kitchensink.svg?branch=master)](https://travis-ci.org/cypress-io/cypress-example-kitchensink) | [basic/.travis.yml](basic/.travis.yml) | [.travis.yml](.travis.yml)

You can find all CI results recorded on the [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/4b7344/runs)

If you are looking for BitBucket Pipelines example, check out [bitbucket.org/cypress-io/cypress-example-kitchensink](https://bitbucket.org/cypress-io/cypress-example-kitchensink).

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
