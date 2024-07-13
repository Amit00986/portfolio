#!/bin/bash

# Define project directory
PROJECT_DIR="/var/www/html"

# Change directory to the project directory or exit if failed
cd "$PROJECT_DIR" || exit 1

# Clean node_modules and package-lock.json
echo "Cleaning node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

# Install dependencies
echo "Installing dependencies..."
npm install

# Check if npm install command was successful
if [[ $? -ne 0 ]]; then
  echo "Error: npm install failed!"
  exit 1
fi

# Ensure react-scripts is installed correctly
if ! npm list react-scripts >/dev/null 2>&1; then
  echo "react-scripts not found. Installing react-scripts..."
  npm install react-scripts
fi

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
