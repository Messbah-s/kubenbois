FROM node:22.20.0-alpine as node
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build -- --configuration=production

FROM nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/
COPY --from=node /app/dist/client/browser/ /usr/share/nginx/html/
EXPOSE 80

LABEL authors="smirs"
