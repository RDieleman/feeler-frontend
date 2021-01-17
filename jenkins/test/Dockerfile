FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

RUN npm test

