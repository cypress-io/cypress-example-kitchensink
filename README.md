
## What is this ?
this repo is a fork which we use to model cypress and buildkite for a specific customer

## relevant files
- .buildkite/pipeline.yml - the pipeline itself. it has a step that runs cypress in dry run and then runs cypress workers in docker
- docker-compose.yml - the docker compose file that runs the cypress workers - does export of env vars
- Dockerfile - a basic dockerfile of the app from the forked repo. it uses the manually pushed image of cypress from our public registry
- script.py - a chatgpt provided code that splits the tests per docker worker
- entrypoint.sh - the script in each docker worker that installs redefine, runs the python script and runs the tests
- cypress_Base/Dockerfile - we manually built and pushed a docker image to our own public registry to have both python, nodejs and cypress in the image to make the CI run faster.
- redefine-0.14.17.post6-py3-none-manylinux1_x86_64.whl - our customer id is from frontegg staging, so we need to talk to dune staging, this means we can't download from our production pip registry, since it contains the certificate to talk to dune. we've manually copied a version from our pip registry since for some we don't automatically upload packages to our pip staging.
## FYI's

- there are 2 failing tests in the first docker worker, this is caused due to the fact that we are using cypress version 10.7 and not a newer one.
- if you care only about the workers and you want a faster cycle, checkout the step named "create specs.txt output" in pipeline.yml 

