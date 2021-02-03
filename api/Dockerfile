FROM node:current-alpine3.12 AS base

WORKDIR /api
COPY package*.json .
EXPOSE 3000

FROM base AS production
ENV NODE_ENV=production
RUN yarn install --frozen-lockfile
COPY . .
CMD ["node", "bin/www"]

FROM base AS dev
ENV NODE_ENV=development
RUN yarn global add nodemon && yarn
COPY . .
CMD yarn start-dev
