FROM node:14
# Create app directory
WORKDIR /app

COPY ./server.js /package.json ./webpack.config.js ./tsconfig.json ./
COPY ./src ./src
COPY ./static ./static


RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "node", "server.js"]
