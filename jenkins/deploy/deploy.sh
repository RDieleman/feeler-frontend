#!/bin/bash

echo "================================"
echo "======= Deploying Code ========="
echo "================================"

docker-compose -f ./jenkins/deploy/docker-compose.yml up -d --no-cache
