@echo off

docker compose up --build -d front db
timeout /t 10 /nobreak
docker compose up --build -d back
