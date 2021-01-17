FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN ls

RUN npm install --legacy-peer-deps

COPY . .

RUN npm test

