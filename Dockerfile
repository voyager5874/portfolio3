# 200MB
#FROM node:alpine

# <150MB
#FROM node:16-alpine

# 250MB
#FROM node:lts-slim


#RUN #npm install -g serve
#RUN yarn global add serve

#WORKDIR /app
#COPY build/ build/

#EXPOSE 3000

#CMD ["serve", "-s", "build"]

#50MB
FROM nginx:alpine
ENV NODE_ENV production

COPY build usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
