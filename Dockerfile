# image has Cypress npm module installed globally in /root/.npm/node_modules
# and Cypress binary cached in /root/.cache/Cypress folder
FROM python:3.8-slim-buster

RUN pip3 install -U redefine --index-url https://redefine.dev/pip/

FROM cypress/included

ENV REDEFINE_ENVIRONMENT="dev"

RUN mkdir /app 
COPY . /app/

WORKDIR /app

RUN npm i --save-dev @neuralegion/cypress-har-generator
RUN npm i --save-dev @neuralegion/cypress-har-generator
RUN npm install -D @cypress/code-coverage
RUN npm i --save-dev cypress-terminal-report
RUN npm install --save-dev @cypress/webpack-preprocessor

RUN chmod 777 /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]

