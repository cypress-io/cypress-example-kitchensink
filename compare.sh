#!/bin/bash

set -e

BEFORE_PKG=https://cdn.cypress.io/beta/npm/10.1.1/darwin-x64/develop-380f4e7d6036fc4fbd8c1443c011cb8414b231a7/cypress.tgz
AFTER_PKG=https://cdn.cypress.io/beta/npm/10.1.1/darwin-arm64/use-m1-runners-ff55e6c80e2fcc53d04b265f29e58b44f0141b29/cypress.tgz
COMMAND="npm run e2e -- --browser chrome"
INSTALL_COMMAND="npm install --save-dev"

#COMMAND="node -p 'foo'"
#INSTALL_COMMAND="echo 'installed'"

ITERATION=0
MAX_ITERATIONS=3

while [[ $ITERATION -lt $MAX_ITERATIONS ]]; do
  echo "⏲ ️Iteration $ITERATION:"
  OUT_FILE=run-before-$ITERATION.log
  echo "🔴 Installing BEFORE_PKG=$BEFORE_PKG"
  $INSTALL_COMMAND $BEFORE_PKG > /dev/null
  echo "🔴 Running "$COMMAND", sending output to $OUT_FILE"
  echo "	🔴 BEFORE results, iteration $ITERATION:"
  set +e
  /usr/bin/time -h bash -c "$COMMAND > $OUT_FILE 2>&1" 
  set -e
  OUT_FILE=run-after-$ITERATION.log
  echo "🔵 Installing AFTER_PKG=$AFTER_PKG"
  $INSTALL_COMMAND $AFTER_PKG > /dev/null
  echo "🔵 Running "$COMMAND", sending output to $OUT_FILE"
  echo "	🔵 AFTER results, iteration $ITERATION:"
  set +e
  /usr/bin/time -h bash -c "$COMMAND > $OUT_FILE 2>&1"
  set -e
  ITERATION=$((ITERATION+1))
done
