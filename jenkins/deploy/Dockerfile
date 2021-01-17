FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY code/package.json .

RUN npm install --legacy-peer-deps

COPY code/ .

RUN npm build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html


