#!/bin/bash

docker compose up --remove-orphans --build -d front db
sleep 10
docker compose up --remove-orphans --build -d back
