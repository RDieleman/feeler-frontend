FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY code/package.json .

RUN ls

RUN npm install --legacy-peer-deps

COPY code/ .

RUN npm test

