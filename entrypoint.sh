echo "--- Node version"
node --version

echo "--- NPM version"
npm --version

# if necessary, reinstall "correct" version of Cypress
# a common situation if testing preview binary build
# "$(npm bin)/cypress" install --force
#

echo "--- Cypress version"
"$(npm bin)/cypress" version

echo "+++ Run Cypress tests"
npm run e2e