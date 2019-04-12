## Setup
Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
npm install --prefix server & npm install --prefix stock-buyer
```

## Start the app and server

```
npx concurrently "npm start --prefix stock-buyer"  "npm start --prefix server"
```
Visit localhost:4200