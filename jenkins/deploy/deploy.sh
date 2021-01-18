#!/bin/bash

echo "================================"
echo "======= Deploying Code ========="
echo "================================"

WORKSPACE=/home/ruben/jenkins/jenkins_home/workspace/feeler-frontend

docker-compose -f ./jenkins/deploy/docker-compose.yml up -d
