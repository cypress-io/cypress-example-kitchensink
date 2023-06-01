# syntax=docker/dockerfile:1
FROM nikolaik/python-nodejs

ENV REDEFINE_ENVIRONMENT="dev"

RUN mkdir /app 
COPY . /app/

WORKDIR /app

# RUN npm install cypress --save-dev

# RUN npm i --save-dev @neuralegion/cypress-har-generator
# RUN npm install -D @cypress/code-coverage
# RUN npm i --save-dev cypress-terminal-report
# RUN npm install --save-dev @cypress/webpack-preprocessor

RUN chmod 777 /app/entrypoint.sh
RUN ls /app

ENTRYPOINT ["/app/entrypoint.sh"]

