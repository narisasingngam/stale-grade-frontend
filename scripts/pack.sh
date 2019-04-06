#!/bin/bash 

docker build -t stale-grade-frontend:latest .
docker tag stale-grade-frontend devinpeace/stale-grade-frontend:latest
docker login -u $DOCKER_LOGIN -p $DOCKER_PWD
docker push devinpeace/stale-grade-frontend
ssh -o "StrictHostKeyChecking no" nc-user@$IP "cd stale-grade-frontend && sudo docker-compose pull && sudo docker-compose build --no-cache && sudo docker-compose up -d --force-recreate""