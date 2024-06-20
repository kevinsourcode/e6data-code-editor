
FROM node:latest

WORKDIR /src/app

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
