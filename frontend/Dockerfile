FROM node:20.0-alpine

WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY tsconfig.json /usr/src/app

RUN npm install react-hot-loader
RUN npm install --no-cache --loglevel verbose

CMD ["npm", "start"]