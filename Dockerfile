FROM node:16-alpine AS BUILDER

RUN apk add --no-cache bash

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn start