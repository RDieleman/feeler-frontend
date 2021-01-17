FROM feeler-frontend:latest as builder

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
