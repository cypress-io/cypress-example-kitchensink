# image has Cypress npm module installed globally in /root/.npm/node_modules
# and Cypress binary cached in /root/.cache/Cypress folder
FROM cypress/included

# installing python and pip
# RUN apt-get update && apt-get install -y software-properties-common && \
#     add-apt-repository -y ppa:deadsnakes/ppa

# RUN apt-get update && apt-get install -y python3.8 python3-distutils python3-pip python3-apt

ENV REDEFINE_ENVIRONMENT="dev"

RUN sed -i -r -e 's|deb(-src)? http://security.debian.org jessie/updates main||g' /etc/apt/sources.list \
    && echo "deb http://ftp.de.debian.org/debian testing main" >> /etc/apt/sources.list \
    && apt-get update && apt-get install -y --no-install-recommends \
         python3 \
         python3-pip \
    && rm -rf /var/lib/apt/lists/*


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

