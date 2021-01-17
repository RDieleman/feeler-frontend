#!/bin/bash

echo "================================"
echo "======== Testing Code =========="
echo "================================"

WORKSPACE=/home/ruben/jenkins/jenkins_home/workspace/feeler-backend

docker run --rm  -v  $WORKSPACE/code:/app -w /app feeler-frontend:latest "$@"