# module install
FROM node:lts-alpine as module-install-stage
# set working directory
WORKDIR /one_night_stand
# add `/one_night_stand/node_modules/.bin` to $PATH
ENV PATH /one_night_stand/node_modules/.bin:$PATH

COPY package.json /one_night_stand/package.json

# RUN apk add yarn
RUN yarn install --production

# build
FROM node:lts-alpine as build-stage
COPY --from=module-install-stage /one_night_stand/node_modules/ /one_night_stand/node_modules
WORKDIR /one_night_stand
COPY . .
RUN yarn build

# serve
FROM node:lts-alpine

COPY --from=build-stage /one_night_stand/.next/ /one_night_stand/.next
RUN npm install -g serve
# start one_night_stand
CMD serve -s /one_night_stand/.next -l 3000