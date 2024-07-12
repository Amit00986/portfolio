#!/bin/bash
cd /var/www/html
echo "Starting the server..."
npm install -g serve
serve -s build
