FROM node:6.16-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm install -g nodemon

EXPOSE 3040

CMD [ "npm", "start" ]