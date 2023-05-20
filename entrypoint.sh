#!/bin/bash

echo "--- Node version"
node --version

echo "--- NPM version"
npm --version

echo "--- Cypress version"
"$(npm bin)/cypress" version

echo "--- Env vars:"
scripts/read_envs.sh

echo "+++ Run Cypress tests"
npm run e2e