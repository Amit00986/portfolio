#!/bin/bash

# Define project directory (optional, adjust if needed)
PROJECT_DIR="/var/www/html"

# Change directory to the project directory or exit if failed
cd "$PROJECT_DIR" || exit 1

# Informative message
echo "Installing dependencies..."
# Install npm dependencies
npm install

# Check if npm install command was successful
if [[ $? -ne 0 ]]; then
  echo "Error: npm install failed!"
  exit 1
fi

# Informative message
echo "Building the React app..."
# Run npm build script
npm run build

# Check if npm run build command was successful
if [[ $? -ne 0 ]]; then
  echo "Error: npm run build failed!"
  exit 1
fi

# Informative message upon successful build
echo "Successfully built the React app!"
