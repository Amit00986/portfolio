#!/bin/bash
cd /var/www/html
echo "Installing dependencies..."
npm install --force
echo "Building the React app..."
npm run build
