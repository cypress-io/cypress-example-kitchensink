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

echo "--- Verifying Redefine"
pip install -U redefine --index-url https://redefine.dev/pip/ 
redefine verify --cypress

echo "+++ Run Cypress tests"
npm run test