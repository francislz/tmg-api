FROM node:20-alpine3.19 AS builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run clean && npm run build

FROM node:20-alpine3.19

ENV NODE_ENV=production

USER node

WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./

RUN npm install --only=production

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/tsconfig.json ./

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
