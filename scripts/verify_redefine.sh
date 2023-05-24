#!/bin/bash

pip3 install -U redefine --index-url https://redefine.dev/pip/

redefine config set stable_branch=master
redefine verify --cypress