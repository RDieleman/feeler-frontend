FROM node:alpine as builder

RUN mkdir /app
WORKDIR /app

COPY /code/package.json .

RUN npm install

COPY /code/ .

RUN npm run-script build
