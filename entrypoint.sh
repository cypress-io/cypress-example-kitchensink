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

# no need to install cypress here, we do it once in our app dockerfile
# npm install cypress@10.10

# pip3 install -U redefine --index-url https://redefine.dev/pip/
pip install ${BUILDKITE_BUILD_CHECKOUT_PATH}/redefine-0.14.17.post6-py3-none-manylinux1_x86_64.whl
redefine config set environment=staging
redefine config set redefine_address=dune-tf-staging.redefine.dev
redefine config set stable_branch=master
redefine start --verbose --cypress --worker


cat /app/redefine/specs.txt
output=$(python /app/script.py)

echo "+++ Run Cypress tests"
echo ${output}
npm start & npx cypress run --spec ${output}





