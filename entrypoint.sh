#!/bin/bash

# echo "--- Node version"
# node --version

# echo "--- NPM version"
# npm --version

# echo "--- Cypress version"
# npx cypress --version

# echo "--- Env vars"
# chmod 777 scripts/read_envs.sh
# scripts/read_envs.sh

# echo "--- Installing npm packages"
# npm install --save-dev
# npm install
# npm install cypress --save-dev

# echo "--- Verifying Redefine"
# chmod 777 scripts/verify_redefine.sh
# scripts/verify_redefine.sh
# export REDEFINE_AUTH=e88afb65-65ef-4798-bc9d-db4c5342f7f3::163bf879-4060-4636-9fb6-49161e68095a
# pip3 install -U redefine --index-url https://redefine.dev/pip/
# pip install ${BUILDKITE_BUILD_CHECKOUT_PATH}/redefine-0.14.16.post8-py3-none-manylinux1_x86_64.whl
# redefine config set environment=staging
# redefine config set redefine_address=dune-tf-staging.redefine.dev
# redefine config set stable_branch=master
# redefine start --verbose --cypress --worker
# npx cypress run
env
cat /app/redefine/1.txt
output=$(python /app/script.py)

echo "+++ Run Cypress tests"
# npm run test
npm start & cypress run --spec ${output}