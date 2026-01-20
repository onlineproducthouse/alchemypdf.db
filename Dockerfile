# syntax=docker/dockerfile:1

ARG IMAGE_REGISTRY_BASE_URL

FROM ${IMAGE_REGISTRY_BASE_URL}/node:25.2.1 AS builder

LABEL maintainer="Bongani Masuku <bongani@1702tech.com>"

RUN mkdir -p /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app/

USER node

COPY --chown=node:node package.json ./

RUN npm run clean && npm i

FROM ${IMAGE_REGISTRY_BASE_URL}/node:25.2.1-alpine

RUN mkdir -p /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app/

USER node

# files
COPY --from=builder --chown=node:node /home/node/app/node_modules ./node_modules

COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./.sequelizerc ./.sequelizerc
COPY --chown=node:node ./tsconfig.json ./tsconfig.json

# folders
COPY --chown=node:node ./migrations ./migrations
COPY --chown=node:node ./scripts ./scripts
COPY --chown=node:node ./src ./src

RUN npm run build

ENTRYPOINT [ "sh", "-c", "npm run db:up"]