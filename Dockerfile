# 1- Use Node.js base image
FROM node:20-alpine

# 2- Set working directory inside container
WORKDIR /usr/src/app

# 3- Copy package.json & package-lock.json (لو موجود)
COPY package*.json ./

# 4- Install dependencies
RUN npm install

# 5- Copy باقي المشروع
COPY . .

# 6- Build NestJS app
RUN npm run build

# 7- Expose port (NestJS default: 3000)
EXPOSE 3000

# 8- Command to run app
CMD ["npm", "run", "start:prod"]
