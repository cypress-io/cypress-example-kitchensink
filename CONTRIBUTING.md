# Contributing

This repo contains the source code that is required to build [https://example.cypress.io](https://example.cypress.io).

This repo is required by the [example](https://github.com/cypress-io/cypress/tree/develop/packages/example) package of Cypress main code base.

## Deployment

1. After making changes to this repo, you need to run the command below. The releaser will prompt you and ask what version to bump the package to. 

  ```bash
  npm run release
  ```

2. Now the [example](https://github.com/cypress-io/cypress/tree/develop/packages/example) package in Cypress' main code base must be updated. [Follow these instructions](https://github.com/cypress-io/cypress/blob/develop/packages/example/README.md#updating-the-example-app) to update the `example` app.
