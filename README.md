this repo is a fork which we use to model cypress and buildkite for a specific customer
we manually built once a docker image to our own public registry to have both python, nodejs and cypress in the image to make the CI run faster.
the dockerfile for this image can be found at cypress_base subfolder. it was manually pushed to our public ecr registry.