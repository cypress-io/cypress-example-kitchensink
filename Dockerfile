# This Docker file is for building this project on Codeship Pro
# https://documentation.codeship.com/pro/languages-frameworks/nodejs/

# use Cypress provided image with all dependencies included
FROM cypress/base:20.11.1
RUN node --version
RUN npm --version
WORKDIR /home/node/app
# copy our test application
COPY package.json package-lock.json ./
COPY app ./app
COPY serve.json ./
COPY scripts ./scripts
# copy Cypress tests
COPY cypress.config.js cypress ./
COPY cypress ./cypress

# avoid many lines of progress bars during install
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1

# install npm dependencies and Cypress binary
RUN npm ci
# check if the binary was installed successfully
RUN npx cypress verify
