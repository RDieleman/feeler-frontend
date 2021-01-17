FROM feeler-frontend:latest as builder
RUN npm run-script build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
