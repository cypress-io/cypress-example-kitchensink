#!/bin/bash

echo "--- Node version"
node --version

echo "--- NPM version"
npm --version

echo "--- Cypress version"
npx cypress --version

echo "--- Env vars:"
chmod 777 scripts/read_envs.sh
scripts/read_envs.sh

echo "+++ Run Cypress tests"
npm run test