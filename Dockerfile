# syntax=docker/dockerfile:1
FROM nikolaik/python-nodejs:python3.11-nodejs16

# ENV REDEFINE_ENVIRONMENT="dev"

# RUN mkdir /app 
# COPY . /app/

# WORKDIR /app

RUN apt-get update && \
  apt-get install --no-install-recommends -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libgbm-dev \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  procps \
  xauth \
  xvfb \
  # install text editors
  # vim-tiny \
  # nano \
  # install emoji font
  # fonts-noto-color-emoji \
  # install Chinese fonts
  # this list was copied from https://github.com/jim3ma/docker-leanote
  # fonts-arphic-bkai00mp \
  # fonts-arphic-bsmi00lp \
  # fonts-arphic-gbsn00lp \
  # fonts-arphic-gkai00mp \
  # fonts-arphic-ukai \
  # fonts-arphic-uming \
  # ttf-wqy-zenhei \
  # ttf-wqy-microhei \
  # xfonts-wqy \
  # clean up
  && rm -rf /var/lib/apt/lists/* \
  && apt-get clean

RUN npm install -g cypress@10.11 && npm install -g @neuralegion/cypress-har-generator && npm install -g -D @cypress/code-coverage && npm install -g cypress-terminal-report && npm install -g @cypress/webpack-preprocessor


