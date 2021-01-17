#!/bin/bash

# Copy the new jar to the build location
cp -r code/ jenkins/test/

echo "======================================="
echo "======== Building Docker Image ========"
echo "======================================="

cd jenkins/test/ && docker-compose -f docker-compose.yml build --no-cache
