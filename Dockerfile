# Base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package and application files
COPY package*.json ./
COPY app.js .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
