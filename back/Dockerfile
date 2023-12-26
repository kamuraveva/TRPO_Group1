FROM node:slim

ADD . /home/back/
WORKDIR /home/back/
RUN npm install 

EXPOSE 3001
ENTRYPOINT npm run start:dev
