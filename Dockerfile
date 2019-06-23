FROM node:alpine

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]