//Handles back end routing, handeling requests etc.
const express = require('express');
//Handles incoming HTTP requests - will forward to express
const http = require('http');
//Parses incoming requests into JSON
const bodyParser = require('body-parser');
//Logging framework - logs income requests and used for debugging
const morgan = require('morgan');
//Creates instance of express
const app = express();


//Server Setup
//Defines the port the server will run on
const port = process.env.PORT || 3090
//Forwards incoming HTTP requests to express
const server = http.createServer(app);
//Listens on a specified port
server.listen(port);
console.log('Server is listening on:', port);
