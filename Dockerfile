FROM node:lts-alpine as module-install-stage

RUN npm install -g npm@9.1.2

RUN npm install -g pnpm

WORKDIR /one_night_stand

COPY package.json pnpm-lock.yaml ./

RUN pnpm install



FROM node:lts-alpine as build-stage


RUN npm install -g npm@9.1.2

RUN npm install -g pnpm

WORKDIR /one_night_stand

COPY --from=module-install-stage  /one_night_stand/node_modules ./node_modules

COPY . .

RUN pnpm build

RUN rm -rf node_modules

RUN pnpm install --production --ignore-scripts --prefer-offline

# This starts our one_night_standlication's run image - the final output of build.
FROM node:lts-alpine


RUN npm install -g npm@9.1.2

RUN npm install -g pnpm

ENV NODE_ENV production

RUN addgroup -g 1001 -S one_night_stand

RUN adduser -S one_night_stand -u 1001

WORKDIR /one_night_stand

COPY --from=build-stage  --chown=one_night_stand:one_night_stand /one_night_stand/package.json /one_night_stand/pnpm-lock.yaml ./
COPY --from=build-stage  --chown=one_night_stand:one_night_stand /one_night_stand/node_modules ./node_modules
COPY --from=build-stage  --chown=one_night_stand:one_night_stand /one_night_stand/public ./public
COPY --from=build-stage  --chown=one_night_stand:one_night_stand /one_night_stand/.next ./.next

# 4. OPTIONALLY the next.config.js, if your one_night_stand has one
COPY --from=build-stage --chown=one_night_stand:one_night_stand /one_night_stand/next.config.js  ./

USER one_night_stand

EXPOSE 3000

CMD [ "pnpm", "start" ]