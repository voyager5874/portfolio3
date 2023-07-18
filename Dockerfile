FROM node:alpine

# Устанавливаем serve глобально
RUN npm install -g serve

WORKDIR /app

COPY build/ build/

EXPOSE 3000

CMD ["serve", "-s", "build"]
