
FROM node:23-alpine3.20
WORKDIR /code
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]