# ---- Stage 1: Build the application ----
# Use an official Node.js runtime as a parent image.
# Using 'alpine' for a smaller image size.
FROM node:20-alpine AS build

# Set the working directory in the container.
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
# This step is separated to leverage Docker's layer caching.
COPY package.json ./

# Install project dependencies.
RUN npm install

# Copy the rest of your application's source code.
COPY . .

# Build the application for production.
# This will create a 'dist' folder with your static files.
RUN npm run build

# ---- Stage 2: Serve the application with Nginx ----
# Use a lightweight Nginx image to serve the static files.
FROM nginx:stable-alpine

# Copy the build output from the 'build' stage.
# The 'dist' directory contains your compiled app.
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to allow traffic to the web server.
EXPOSE 80

# The default Nginx command will start the server automatically.
# CMD ["nginx", "-g", "daemon off;"] is run by default.
