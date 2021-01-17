FROM node:current-alpine3.10 as builder

RUN mkdir /app

COPY code/package.json .

RUN npm install

COPY code/ .

RUN npm run-script build
