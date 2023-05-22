#!/bin/bash

npm install --save-dev
npm install 

pip install -U redefine --index-url https://redefine.dev/pip/ 
redefine verify --cypress