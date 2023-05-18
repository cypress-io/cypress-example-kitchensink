# image has Cypress npm module installed globally in /root/.npm/node_modules
# and Cypress binary cached in /root/.cache/Cypress folder
FROM lumigo/cypress-python

ARG BUILDKITE_BUILD_CHECKOUT_PATH="/app"
ARG BUILDKITE_BUILD_ID="TEST-BUILD-ID"
ARG BUILDKITE_PIPELINE_NAME="TEST-PIPELINE_NAME"
ARG BUILDKITE_LABEL="TEST-JOB-NAME"
ARG BUILDKITE_BRANCH="main"
ARG BUILDKITE="true"
ARG BUILDKITE_COMMIT


ENV BUILDKITE ${BUILDKITE}
ENV BUILDKITE_BUILD_CHECKOUT_PATH ${BUILDKITE_BUILD_CHECKOUT_PATH}
ENV BUILDKITE_BUILD_ID ${BUILDKITE_BUILD_ID}
ENV BUILDKITE_PIPELINE_NAME ${BUILDKITE_PIPELINE_NAME}
ENV BUILDKITE_LABEL ${BUILDKITE_LABEL}
ENV BUILDKITE_BRANCH ${BUILDKITE_BRANCH}
ENV BUILDKITE_COMMIT ${BUILDKITE_COMMIT}
ENV REDEFINE_ENVIRONMENT "dev"



RUN mkdir /app 
COPY . /app/

WORKDIR /app

RUN chmod 777 scripts/read_envs.sh
RUN scripts/read_envs.sh

RUN apt install python3-pip
RUN pip3 install redefine --index-url https://redefine.dev/pip/
RUN redefine verify --pytest

RUN npm install cypress
RUN npm run test

ENTRYPOINT ["./entrypoint.sh"]

