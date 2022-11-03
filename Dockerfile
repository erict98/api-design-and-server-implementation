FROM node:11
WORKDIR /api/
COPY package*.json ./
RUN npm install
ADD src /api/dist/
ENV PORT=8000
EXPOSE ${PORT}
CMD [ "npm", "start"]