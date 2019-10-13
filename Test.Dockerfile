FROM cypress/base:10

RUN apt-get update && \
  apt-get install -y \
  python3-dev \
  python3-pip

# Install AWS CLI
RUN pip3 install awscli

# Install Codefresh CLI
RUN wget https://github.com/codefresh-io/cli/releases/download/v0.31.1/codefresh-v0.31.1-alpine-x64.tar.gz
RUN tar -xf codefresh-v0.31.1-alpine-x64.tar.gz -C /usr/local/bin/

COPY . /src

WORKDIR /src

RUN npm install
