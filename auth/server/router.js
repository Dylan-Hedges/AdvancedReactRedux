const Authentication = require('./controllers/authentication');

//Contains Route Handlers
module.exports = function(app){
  //Sign Up Route Handler - When a POST HTTP request is sent to the '/signup' route, execute the Authentication.signup function (imported above)
  app.post('/signup', Authentication.signup)
};
