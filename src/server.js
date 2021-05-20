const express = require('express');

const listItems = require('./endpoints/list-items');
const getItem = require('./endpoints/get-item');
const authorMiddleware = require('./middlewares/author');

const server = express();

server.use(express.json());

server.get('/items', listItems);
server.get('/items/:id', authorMiddleware, getItem);

module.exports = server;
