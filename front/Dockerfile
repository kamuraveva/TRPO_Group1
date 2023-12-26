FROM node:slim

ADD . /home/front/
WORKDIR /home/front/
RUN npm install

EXPOSE 5173
ENTRYPOINT npm run dev -- --host=0.0.0.0
