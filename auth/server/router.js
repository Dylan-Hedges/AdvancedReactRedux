//Imports our authentication controller
const Authentication = require('./controllers/authentication');
//Imports our Passport.js configuration
const passportService = require('./services/passport');
//Imports the Passport.js library
const passport = require('passport');

//Authenticates incoming requests using the Passport.authenticate jwt strategy - acts as middleware, executed before the request reaches the route, authenticates the user if there is a valid JWT in header -> 'authorization' otherwise returns Unauthorized; {session:false} - dont make it a cookie based session as we are using JWTs
const requireAuth = passport.authenticate('jwt', {session:false});

//Contains Route Handlers
module.exports = function(app){
  //RH for the root route (GET requests) - before the incoming request reaches the route, send them through the requireAuth, uses the Passport jwt strategy, if successful cntinue onto the route, incoming request -> requireAuth -> route
  app.get('/', requireAuth, function(req, res){
    res.send({hi:'there'})
  })
  //RH for Sign UP (POST requests) - When a POST HTTP request is sent to the '/signup' route, execute the Authentication.signup function (imported above)
  app.post('/signup', Authentication.signup)
};
