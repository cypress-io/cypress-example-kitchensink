#!/bin/bash

npm install --save-dev
npm install

pip install -U redefine --index-url https://redefine.dev/pip/ 
redefine config set stable_branch=master
redefine verify --cypress