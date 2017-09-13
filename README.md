# Kitchen Sink [![Circle CI](https://circleci.com/gh/cypress-io/cypress-example-kitchensink.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-kitchensink) [![Travis CI](https://travis-ci.org/cypress-io/cypress-example-kitchensink.svg?branch=master)](https://travis-ci.org/cypress-io/cypress-example-kitchensink) [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/4b7344/runs)

![kitchensink](https://cloud.githubusercontent.com/assets/1268976/14084252/e309e370-f4e7-11e5-9562-24f516563ac9.gif)

This is an example app used to showcase [Cypress.io](https://www.cypress.io/) testing. The application utilizes every command available in Cypress for demonstration purposes. Additionally this example app is configured to run tests in Travis CI and CircleCI. The [tests](https://github.com/cypress-io/cypress-example-kitchensink/blob/master/cypress/integration/example_spec.js) are also heavily commented. For a full reference of our documentation, go to [docs.cypress.io](https://docs.cypress.io/).

To see the kitchen sink application, visit [example.cypress.io](https://example.cypress.io/).

## Features:

- Querying
- Traversal
- Actions
- Viewport
- Navigation
- Aliasing
- Waiting
- Network Requests
- Files
- Local Storage
- Cookies
- Spies, Stubs & Clocks

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Gitter Chat](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

### 2. Fork this repo

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

### 3. Add the project to Cypress

[Follow these instructions to add the project to Cypress.](https://on.cypress.io/guides/installing-and-running#section-adding-projects)

### 4. Run in Continuous Integration

[Follow these instructions to run the tests in CI.](https://on.cypress.io/guides/continuous-integration#section-running-in-ci)


## Changelog

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
