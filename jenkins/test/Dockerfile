FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY . .

RUN ls

RUN npm install --legacy-peer-deps

RUN npm test

