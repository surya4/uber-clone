FROM node:8

WORKDIR /usr/src/uber-clone
# WORKDIR /uber-clone

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]