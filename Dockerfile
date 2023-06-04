# syntax=docker/dockerfile:1
FROM public.ecr.aws/i6o6z6k3/bk_cypress_base:latest

ENV REDEFINE_ENVIRONMENT="dev"

RUN mkdir /app 
COPY . /app/

WORKDIR /app

RUN chmod 777 /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"