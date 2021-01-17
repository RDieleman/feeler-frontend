FROM node:alpine as builder

RUN mkdir /app

COPY code/package.json .

RUN npm install --legacy-peer-deps

COPY code/ .

RUN npm run-script build
