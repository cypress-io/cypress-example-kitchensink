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
Azure CI | [![Build Status](https://cypress-io.visualstudio.com/cypress-example-kitchensink/_apis/build/status/cypress-example-kitchensink)](https://cypress-io.visualstudio.com/cypress-example-kitchensink/_build/latest?definitionId=1) | [basic/azure-ci.yml](basic/azure-ci.yml)
Buildkite | [![Buildkite CI](https://badge.buildkite.com/d1bd1f093d97de34475da7d545c80eb2be9749eefe1c7133f0.svg)](https://buildkite.com/cypress-io/cypress-example-kitchensink) | [.buildkite/pipeline.yml](.buildkite/pipeline.yml)
Circle | [![Circle CI](https://circleci.com/gh/cypress-io/cypress-example-kitchensink.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-kitchensink) | [basic/circle.yml](basic/circle.yml) | [circle.yml](circle.yml)
Codeship Pro | [ ![Codeship Pro CI](https://app.codeship.com/projects/8d6a20c0-b70e-0133-41c6-56e5cd60fbd0/status?branch=master)](https://app.codeship.com/projects/134609) | [basic/codeship-pro](basic/codeship-pro)
GitLab | [![GitLab CI](https://gitlab.com/cypress-io/cypress-example-kitchensink/badges/master/pipeline.svg)](https://gitlab.com/cypress-io/cypress-example-kitchensink/commits/master) | [basic/.gitlab-ci.yml](basic/.gitlab-ci.yml) | [.gitlab-ci.yml](.gitlab-ci.yml)
Jenkins | | [basic/Jenkinsfile](basic/Jenkinsfile) | [Jenkinsfile](Jenkinsfile)
Semaphore | [![Semaphore CI](https://semaphoreci.com/api/v1/cypress-io/cypress-example-kitchensink/branches/master/badge.svg)](https://semaphoreci.com/cypress-io/cypress-example-kitchensink)
Shippable | [![Shippable CI](https://api.shippable.com/projects/56c38fdc1895ca4474743010/badge?branch=master)](https://app.shippable.com/github/cypress-io/cypress-example-kitchensink) | [shippable.yml](shippable.yml)
Travis | [![Travis CI](https://travis-ci.org/cypress-io/cypress-example-kitchensink.svg?branch=master)](https://travis-ci.org/cypress-io/cypress-example-kitchensink) | [basic/.travis.yml](basic/.travis.yml) | [.travis.yml](.travis.yml)

You can find all CI results recorded on the [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/4b7344/runs)

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

#### 1.0.2 - *(06/28/18)*
- updated dependencies
- add Cypress.Screenshot.defaults test
- improvements to build and deploy  process
- bump to node 8

#### 1.0.1 - *(05/14/18)*
- updated README to link to correct examples folder
- added assertion to prevUntil test

#### 1.0.0 - *(04/13/18)*
- split example_spec into seperate files
- convert all JS from ES5 -> ES6
- update all code content to match actual specs
- move all Cypress API examples into 1 page
- have nav be active when visiting page
- add GitHub link to repo in main nav
- add link to docs from every header
- general grammar and link fixes

#### 0.8.3 - *(12/19/17)*
- add platform check to cy.exec() example
- fix typo

#### 0.8.2 - *(11/30/17)*
- eslint tests and js script

#### 0.8.1 - *(10/16/17)*
- updated .prev html to match test
- added contributing doc

#### 0.8.0 - *(09/10/17)*
- updated for cypress 0.20.0
- added new cy commands
- update support files for new scaffolding

#### 0.7.0
- new traversal commands

#### 0.6.2
- fix flaky location calls

#### 0.6.1
- remove .only

#### 0.6.0
- added stubs, spies, clocks example, fix cy.readFile

#### 0.5.3
- missing var

#### 0.5.2
- bump up default config values

#### 0.5.1
- prevent file server caching

#### 0.5.0 - *(09/01/16)*
- renamed Fixtures section to Files
- added examples for writeFile
- added example for readFile
- added examples for using modifier keys on cy.type
- fixed some formatting

#### 0.4.2
- rename commandTimeout -> defaultCommandTimeout

#### 0.4.1
- remove spacejam visit, use https

#### 0.4.0
- added cy.screenshot example

#### 0.3.0
- added cy.exec() command examples

#### 0.2.3
- fix for clearing 3rd party cookies after visit

#### 0.2.2
- removed methods on Cypress.Cookies

#### 0.2.1
- removed selenium references

#### 0.2.0
- added examples of new cypress cookie commands

#### 0.1.5
- removed relative cy.visit which causes errors on new projects

#### 0.1.4
- updated node version to 5.10.0

#### 0.1.3
- renamed visitTimeout option to pageLoadTimeout

#### 0.1.2
- updated links to be https

#### 0.1.1
- added cy.reload(true) example

#### 0.1.0
- initial release
