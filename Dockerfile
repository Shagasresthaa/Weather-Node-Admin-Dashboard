FROM node:16 as node
WORKDIR /app
COPY . .
RUN npm install
CMD ["ng", "build", "--prod"]

FROM nginx:1.21.6
COPY --from=node /app/dist/weather-node-admin-dashboard /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'