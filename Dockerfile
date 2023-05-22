# image has Cypress npm module installed globally in /root/.npm/node_modules
# and Cypress binary cached in /root/.cache/Cypress folder
FROM cypress/included

RUN apt-get update && apt-get install -y --no-install-recommends \
        libc6-dev \
        python3.7 \
        python3.7-dev \
        python3-pip \
        python3-setuptools \
        python3-wheel \
    && rm -rf /var/lib/apt/lists/*

RUN echo $BUILDKITE_BUILD_CHECKOUT_PATH 
RUN mkdir /app 
COPY . /app/

WORKDIR /app

RUN npm i --save-dev @neuralegion/cypress-har-generator
RUN npm i --save-dev @neuralegion/cypress-har-generator
RUN npm install -D @cypress/code-coverage
RUN npm i --save-dev cypress-terminal-report
RUN npm install --save-dev @cypress/webpack-preprocessor

RUN npm list -g

RUN chmod 777 /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]

