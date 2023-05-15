# image has Cypress npm module installed globally in /root/.npm/node_modules
# and Cypress binary cached in /root/.cache/Cypress folder
FROM cypress/included:latest

RUN mkdir /app 
COPY . /app/

WORKDIR /app

# RUN npm install --save-dev cypress
RUN npm run test

ENTRYPOINT ["./entrypoint.sh"]

