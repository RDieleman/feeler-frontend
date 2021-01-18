#!/bin/bash

# Copy the new jar to the build location
ls
cp -r code/ jenkins/deploy/

echo "======================================="
echo "======== Building Docker Image ========"
echo "======================================="

cd jenkins/deploy/ && docker-compose -f docker-compose.yml build --no-cache