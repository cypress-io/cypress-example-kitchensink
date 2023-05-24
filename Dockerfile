# image has Cypress npm module installed globally in /root/.npm/node_modules
# and Cypress binary cached in /root/.cache/Cypress folder
FROM lumigo/cypress-python

# installing pip
RUN apt install python3-pip

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

