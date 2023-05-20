# image has Cypress npm module installed globally in /root/.npm/node_modules
# and Cypress binary cached in /root/.cache/Cypress folder
FROM cypress/included:latest

RUN echo $BUILDKITE_BUILD_CHECKOUT_PATH 
RUN mkdir /app 
COPY . /app/

WORKDIR /app

ENTRYPOINT ["./entrypoint.sh"]

