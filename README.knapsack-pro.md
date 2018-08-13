# Kitchen Sink app with Cypress.io and KnapsackPro.com

[![CircleCI](https://circleci.com/gh/KnapsackPro/cypress-example-kitchensink/tree/knapsack-pro.svg?style=svg)](https://circleci.com/gh/KnapsackPro/cypress-example-kitchensink/tree/knapsack-pro)

## Dependencies

* [@knapsack-pro/core](https://github.com/KnapsackPro/knapsack-pro-core-js)
* [@knapsack-pro/cypress](https://github.com/KnapsackPro/knapsack-pro-cypress)

## Development

1. Setup [@knapsack-pro/core](https://github.com/KnapsackPro/knapsack-pro-core-js) project.

2. Setup [@knapsack-pro/cypress](https://github.com/KnapsackPro/knapsack-pro-cypress) project.

3. Install dependencies.

```
$ npm install
```

3. Use your local version of `@knapsack-pro/cypress` registered with node.

```
$ npm link @knapsack-pro/cypress
```

## Run tiny test suite to test Knapsack Pro

It's configured in `package.json`.

```
$ npm run test:tiny_test_suite
```

## Testing

### Test `@knapsack-pro/cypress` from npm registry

Ensure you have in `package.json` the latest version of `@knapsack-pro/cypress` and you run `npm install`:

```
{
  "dependencies": {
    "@knapsack-pro/cypress": "latest"
  }
}
```

### Run tests with `@knapsack-pro/cypress`

```
$ npx knapsack-pro-cypress
```
