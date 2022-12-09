# FROM initializes new build stage and sets the base image: node ver. 11
FROM node:11

# WORKDIR defines the working directory
WORKDIR /app

# COPY copies the content to WORKDIR
COPY package*.json ./
COPY dist ./dist

# RUN will install dependencies on new layer and commit the results
RUN npm install

# Set and expose the PORT
ENV PORT=3000
EXPOSE ${PORT}

# CMD is executed from the WORKDIR
CMD ["npm", "start"]