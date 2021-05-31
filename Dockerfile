FROM node:14

# Create app directory
WORKDIR /app
COPY package.json ./
COPY ./ ./app


RUN npm install
RUN npm run build

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "./utils/server.js"]
