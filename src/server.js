const express = require('express');

const listItems = require('./endpoints/list-items');
const getItem = require('./endpoints/get-item');

const server = express();

server.use(express.json());

server.get('/items', listItems);
server.get('/items/:id', getItem);

module.exports = server;
