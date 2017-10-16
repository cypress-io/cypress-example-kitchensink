# Contributing

This repo contains the source code that is required to build [https://example.cypress.io](https://example.cypress.io).

This repo is required by the [example](https://github.com/cypress-io/cypress/tree/develop/packages/example) package of Cypress main code base.

## Deployment

After making changes to this repo, you need to run:

```bash
npm run release
```

The releaser will prompt you and ask what version to bump the package to. In order for the changes to take effect, the [example](https://github.com/cypress-io/cypress/tree/develop/packages/example) package in Cypress' main code base must be updated to include the newest version in its [package.json](https://github.com/cypress-io/cypress/blob/develop/packages/example/package.json).
