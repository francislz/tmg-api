FROM node:20-alpine3.19 AS builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install --ignore-scripts

COPY ./src ./src
COPY ./tsconfig.json .

RUN npm run clean && npm run build

FROM node:20-alpine3.19

ENV NODE_ENV=production

USER node

WORKDIR /usr/src/app
COPY --chown=root:root --chmod=755 package.json ./
COPY --chown=node:node package-lock.json ./

RUN npm install --ignore-scripts --only=production

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/tsconfig.json ./

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
