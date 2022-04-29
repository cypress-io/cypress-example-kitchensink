# Kitchen Sink app with Cypress.io and KnapsackPro.com

[![CircleCI](https://circleci.com/gh/KnapsackPro/cypress-example-kitchensink/tree/knapsack-pro.svg?style=svg)](https://circleci.com/gh/KnapsackPro/cypress-example-kitchensink/tree/knapsack-pro)
[![Knapsack Pro Parallel CI builds for Cypress - GitHub Actions](https://img.shields.io/badge/Knapsack%20Pro-Parallel%20/%20Cypress%20--%20GitHub%20Actions-%230074ff)](https://knapsackpro.com/dashboard/organizations/54/projects/511/test_suites/820/builds)

## Dependencies

- [@knapsack-pro/core](https://github.com/KnapsackPro/knapsack-pro-core-js)
- [@knapsack-pro/cypress](https://github.com/KnapsackPro/knapsack-pro-cypress)

## Development

1. Setup [@knapsack-pro/core](https://github.com/KnapsackPro/knapsack-pro-core-js) project.

2. Setup [@knapsack-pro/cypress](https://github.com/KnapsackPro/knapsack-pro-cypress) project.

**Follow below steps or use `bin/setup_development` script.**

3. Install dependencies.

   ```
   $ npm install
   $(npm bin)/cypress install
   ```

4. Use your local version of `@knapsack-pro/cypress` and `@knapsack-pro/core` registered with node.

   ```
   $ npm link @knapsack-pro/cypress
   $ npm link @knapsack-pro/core
   ```

## Testing

Before you run tests please ensure the kitchensink app is up and running.

```
$ npm start
```

### When `@knapsack-pro/cypress` was not yet published to npm registry

Ensure you have in `package.json` local version of `knapsack-pro/cypress` and run `npm install`:

```
{
  "devDependencies": {
    "@knapsack-pro/cypress": "file:../knapsack-pro-cypress",
  }
}
```

### When `@knapsack-pro/cypress` was already published in npm registry

Ensure you have in `package.json` the latest version of `@knapsack-pro/cypress` and run `npm install`:

```
{
  "devDependencies": {
    "@knapsack-pro/cypress": "x.x.x"
  }
}
```

### Run tests with `@knapsack-pro/cypress`

This is useful if you want to run tests in development to test `@knapsack-pro/cypress`.

```
$ bin/knapsack_pro_cypress
```

Run only small subset of test suite. Useful for quick testing:

```
$ bin/knapsack_pro_cypress_test_file_pattern
```

## Run tiny test suite to test Knapsack Pro

It's configured in `package.json`.

```
$ npm run test:tiny_test_suite
```
