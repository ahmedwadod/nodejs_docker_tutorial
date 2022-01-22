# Base image
FROM node:alpine

# The working directory inside the container
WORKDIR /App

# Copy the package.json file
COPY package.json package.json

# Install the packages for production environment
RUN npm i --production --omit dev

# Copy the source files
COPY src/ src/

# The main entry point of the container
CMD [ "node", "src/app.js" ]
