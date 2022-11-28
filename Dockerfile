FROM node:lts-alpine as module-install-stage

WORKDIR /one_night_stand

COPY package.json yarn.lock ./

RUN yarn install --frozwn-lockfile



FROM node:16-alpine3.16 AS BUILD_IMAGE

WORKDIR /one_night_stand

COPY --from=deps /one_night_stand/node_modules ./node_modules

COPY . .

RUN yarn build

RUN rm -rf node_modules

RUN yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline

# This starts our one_night_standlication's run image - the final output of build.
FROM node:16-alpine3.16

ENV NODE_ENV production

RUN addgroup -g 1001 -S one_night_stand

RUN adduser -S one_night_stand -u 1001

WORKDIR /one_night_stand

COPY --from=BUILD_IMAGE --chown=one_night_stand:one_night_stand /one_night_stand/package.json /one_night_stand/yarn.lock ./
COPY --from=BUILD_IMAGE --chown=one_night_stand:one_night_stand /one_night_stand/node_modules ./node_modules
COPY --from=BUILD_IMAGE --chown=one_night_stand:one_night_stand /one_night_stand/public ./public
COPY --from=BUILD_IMAGE --chown=one_night_stand:one_night_stand /one_night_stand/.next ./.next

# 4. OPTIONALLY the next.config.js, if your one_night_stand has one
COPY --from=BUILD_IMAGE --chown=one_night_stand:one_night_stand /one_night_stand/next.config.js  ./

USER one_night_stand3

EXPOSE 3000

CMD [ "yarn", "start" ]