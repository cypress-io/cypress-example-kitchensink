# Kitchen Sink [![Circle CI](https://circleci.com/gh/cypress-io/cypress-example-kitchensink.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-kitchensink) [![Travis CI](https://travis-ci.org/cypress-io/cypress-example-kitchensink.svg?branch=master)](https://travis-ci.org/cypress-io/cypress-example-kitchensink) [![Codeship Status for cypress-io/cypress-example-kitchensink](https://codeship.com/projects/8d6a20c0-b70e-0133-41c6-56e5cd60fbd0/status?branch=master)](https://codeship.com/projects/134609)

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
- Fixtures
- Local Storage
- Cookies

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://github.com/cypress-io/cypress/wiki)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)

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

#### 0.1.0
- initial release
