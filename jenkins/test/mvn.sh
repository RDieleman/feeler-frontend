#!/bin/bash

echo "================================"
echo "======== Testing Code =========="
echo "================================"

WORKSPACE=/home/ruben/jenkins/jenkins_home/workspace/feeler-frontend

docker run --rm -w /app feeler-frontend:latest-test "$@"