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

ls /app
ls /app/redefine
env

cat > /app/redefine/redefine_specs.txt<< EOF
cypress/e2e/2-advanced-examples/network_requests.cy.js
cypress/e2e/2-advanced-examples/actions.cy.js
cypress/e2e/2-advanced-examples/files.cy.js
cypress/e2e/2-advanced-examples/querying.cy.js
cypress/e2e/2-advanced-examples/aliasing.cy.js
cypress/e2e/2-advanced-examples/misc.cy.js
cypress/e2e/2-advanced-examples/location.cy.js
cypress/e2e/2-advanced-examples/assertions.cy.js
cypress/e2e/2-advanced-examples/viewport.cy.js
cypress/e2e/2-advanced-examples/waiting.cy.js
cypress/e2e/1-getting-started/todo.cy.js
cypress/e2e/2-advanced-examples/utilities.cy.js
cypress/e2e/2-advanced-examples/window.cy.js
cypress/e2e/2-advanced-examples/spies_stubs_clocks.cy.js
cypress/e2e/2-advanced-examples/traversal.cy.js
cypress/e2e/2-advanced-examples/storage.cy.js
cypress/e2e/2-advanced-examples/connectors.cy.js
cypress/e2e/2-advanced-examples/cookies.cy.js
cypress/e2e/2-advanced-examples/cypress_api.cy.js
cypress/e2e/2-advanced-examples/navigation.cy.js
EOF

cat /app/redefine/redefine_specs.txt

echo "foo"
npm install cypress@10.7
pip3 uninstall -y redefine
pip3 install -U redefine --index-url https://redefine.dev/pip
# redefine config set environment=staging
# redefine config set redefine_address=dune-tf-staging.redefine.dev
redefine config set stable_branch=master
redefine start --verbose --cypress --worker


# cat /app/redefine/redefine_specs.txt
output=$(python /app/script.py)

echo "+++ Run Cypress tests"
echo ${output}
npm start & npx cypress run --spec ${output}
