FROM node:lts-alpine

WORKDIR /app

COPY package.json .

RUN npm

COPY . .

EXPOSE 5173

CMD ["npm", "dev"]
