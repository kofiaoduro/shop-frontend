FROM node:24-alpine3.22

WORKDIR /APP


COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 5174


CMD [ "npm", "run", "dev" ]