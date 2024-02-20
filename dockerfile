# node as parent/base image
FROM node:alpine

# sets the working directory 
WORKDIR /app

# copies package.json which has all dependencies
COPY package*.json ./

# installs all dependencies from package.json
RUN npm install

# copies the code from frontend
COPY . .

# npm command for creating a build
RUN npm run build

# makes port 3000 available for hosting
EXPOSE 3000

# runs the app when conatiner is created
CMD ["npm", "start"]
