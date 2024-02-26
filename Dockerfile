# Use a Node.js base image for building the React app and running the JSON server
FROM node:16.14.0 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the source code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Production stage  
FROM nginx:alpine 

# Install Node.js
RUN apk add --no-cache nodejs npm

COPY --from=builder /app/build /usr/share/nginx/html

# Copy app for json-server assets
COPY --from=builder /app /app

EXPOSE 3000
EXPOSE 5000  

# Start Nginx and json-server
CMD ["sh", "-c", "nginx -g 'daemon off;'; npm run server"]
