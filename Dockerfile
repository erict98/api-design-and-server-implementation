FROM node:11

WORKDIR /app

COPY package*.json ./

COPY dist ./dist

RUN npm install

CMD ["npm", "start"]