this repo is a fork which we use to model cypress and buildkite for a specific customer
we manually built once a docker image to our own public registry to have both python, nodejs and cypress in the image to make the CI run faster.
the dockerfile for this image can be found at cypress_base subfolder. it was manually pushed to our public ecr registry.

relevant files in this repo are:
- pipeline.yml - the pipeline itself. it has a step that runs cypress in dry run and then runs cypress workers in docker
- docker-compose.yml - the docker compose file that runs the cypress workers

