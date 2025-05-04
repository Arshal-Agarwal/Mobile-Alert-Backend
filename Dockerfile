FROM node:22 AS backend-builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:22-slim 

WORKDIR /app

COPY --from=backend-builder /app .

EXPOSE 5000

CMD ["npm", "run", "start"]