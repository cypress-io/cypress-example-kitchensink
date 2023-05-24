# syntax=docker/dockerfile:1
FROM nikolaik/python-nodejs

ENV REDEFINE_ENVIRONMENT="dev"

RUN mkdir /app 
COPY . /app/

WORKDIR /app

RUN apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
RUN npm install cypress --save-dev

RUN npm i --save-dev @neuralegion/cypress-har-generator
RUN npm i --save-dev @neuralegion/cypress-har-generator
RUN npm install -D @cypress/code-coverage
RUN npm i --save-dev cypress-terminal-report
RUN npm install --save-dev @cypress/webpack-preprocessor

RUN chmod 777 /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]

