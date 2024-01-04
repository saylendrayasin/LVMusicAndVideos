FROM node:16-alpine

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD npm start
