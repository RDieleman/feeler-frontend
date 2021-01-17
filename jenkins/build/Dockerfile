FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY code/package.json .

RUN cd app

RUN npm install --legacy-peer-deps

COPY . .
