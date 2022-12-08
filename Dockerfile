# FROM initializes new build stage and sets the base image: node ver. 11
FROM node:11

# WORKDIR defines the working directory for the commands below
WORKDIR /app

# ADD allows you to move src folder to dist folder
COPY dist ./dist

# COPY copies the content to WORKDIR
COPY package*.json ./

# RUN will install dependencies on new layer and commit the results
RUN npm install

# ENV will set the port to 
ENV PORT=3000

EXPOSE ${PORT}

# CMD is executed from the WORKDIR
CMD ["npm", "start"]