FROM node:alpine

RUN mkdir /app
WORKDIR /app

RUN cd code

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .
