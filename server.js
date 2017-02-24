const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8081;

const http = require('http').Server(app);

// const router = require('express').Router();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTION');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.resolve(__dirname, './public')));

const server = http.listen(port);
console.log(`Server is running on port: ${port}`);
