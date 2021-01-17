FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY code/package.json .

RUN ls

RUN npm install --legacy-peer-deps

COPY code/ .

RUN ls

RUN CI=true npm run-script test

