# Kitchen Sink app with Cypress.io and KnapsackPro.com

[![CircleCI](https://circleci.com/gh/KnapsackPro/cypress-example-kitchensink/tree/knapsack-pro.svg?style=svg)](https://circleci.com/gh/KnapsackPro/cypress-example-kitchensink/tree/knapsack-pro)

## Development

```
$ npm install
```

Ensure you checked readme for `@knapsack-pro/cypress` before running below command.
It's important to run `npm link package-name` after `npm install` so the link will override package installed by npm.

```
$ npm link @knapsack-pro/cypress
```

## Run tiny test suite to test Knapsack Pro

It's configured in `package.json`.

```
$ npm run test:tiny_test_suite
```

## Testing `@knapsack-pro/cypress` from npm registry

Ensure you have in `package.json` the latest version of `@knapsack-pro/cypress` and you run `npm install`:

```
{
  "dependencies": {
    "@knapsack-pro/cypress": "latest"
  }
}
```

## Run tests with `@knapsack-pro/cypress`

```
$ npx knapsack-pro-cypress
```