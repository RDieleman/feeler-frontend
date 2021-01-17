#!/bin/bash

# Copy the new jar to the build location
cp -rf /code/ /jenkins/build/code/

echo "======================================="
echo "======== Building Docker Image ========"
echo "======================================="

cd jenkins/build/ && docker-compose -f docker-compose.yml build --no-cache
