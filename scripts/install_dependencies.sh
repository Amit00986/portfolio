#!/bin/bash

# Define project directory (optional, adjust if needed)
PROJECT_DIR="/var/www/html"

cd "$PROJECT_DIR" || exit 1  # Exit if directory change fails

echo "Installing dependencies..."
npm install  # Avoid --force flag

if [[ $? -ne 0 ]]; then
  echo "Error: npm install failed!"
  exit 1
fi

echo "Building the React app..."
npm run build

if [[ $? -ne 0 ]]; then
  echo "Error: npm run build failed!"
  exit 1
fi

echo "Successfully built the React app!"
