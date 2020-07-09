//Access Keys
const keys = require('./config/keys');
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
//Contains Route Handlers
const router = require('./router');
//Interacts with MongoDB
const mongoose = require('mongoose');
//Used to configure where we want to allow CORS requests from
const cors = require('cors');

//Connects to remote MongoDB (mLab)
mongoose.connect(keys.mongoURI);


//App Setup - app.use() uses the libraries provided as middleware
//Logging framework - used for debugging, logs incoming requests
app.use(morgan('combined'));
//Allows our app to recieve CORS requests from any domain, subdomain or port - can also configure it to allow CORS requests from specific domains, subdomains or ports
app.use(cors());
//Parses incoming requests as JSON - '*/*' = parse all incoming request types
app.use(bodyParser.json({type: '*/*'}));
router(app);

//Server Setup
//Defines the port the server will run on
const port = process.env.PORT || 3090
//Forwards incoming HTTP requests to express
const server = http.createServer(app);
//Listens on a specified port
server.listen(port);
console.log('Server is listening on:', port);
