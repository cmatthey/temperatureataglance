FROM node:current-alpine3.12 AS base
# FROM node:14-alpine3.12 AS base

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python2 make g++ && ln -sf python2 /usr/bin/python

WORKDIR /ui
COPY package.json .
EXPOSE 3000

FROM base AS dev
RUN yarn
# COPY . .
CMD yarn start
