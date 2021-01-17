#!/bin/bash

# Copy the new jar to the build location
cp -r code/ jenkins/build/

echo "======================================="
echo "======== Building Docker Image ========"
echo "======================================="

cd jenkins/build/ && docker-compose -f docker-compose.yml build
