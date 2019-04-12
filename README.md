## Setup
Install global TypeScript and TypeScript Node if not installed already. Npm i locally

```
npm install -g typescript ts-node
npm install --prefix server && npm install --prefix client
```

## Start the app and server

```
npx concurrently "npm start --prefix client"  "npm start --prefix server"
```
Visit localhost:4200