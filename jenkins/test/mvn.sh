#!/bin/bash
cp -r code/ jenkins/test/

echo "================================"
echo "======== Testing Code =========="
echo "================================"

WORKSPACE=/home/ruben/jenkins/jenkins_home/workspace/feeler-frontend

docker run --rm -v $WORKSPACE/code:/app -w /app feeler-frontend:latest-test "$@"