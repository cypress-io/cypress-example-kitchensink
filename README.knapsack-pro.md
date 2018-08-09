# Kitchen Sink app with Cypress.io and KnapsackPro.com

## Development

### Run tiny test suite to test Knapsack Pro

It's configured in `package.json`.

```
npm run test:tiny_test_suite
```

### Run `@knapsack-pro/cypress`

Ensure the `package.json` has line added:

```
{
  "scripts": {
    "knapsack-pro-cypress": "node node_modules/@knapsack-pro/cypress/bin/knapsack-pro-cypress.js"
  }
}
```

Then you can run tests with `@knapsack-pro/cypress` using the command:

```
npm run knapsack-pro-cypress
```