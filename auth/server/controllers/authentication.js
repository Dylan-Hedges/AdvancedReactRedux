//Imports JWT library - creates JSON Web Tokens for user authentication
const jwt = require('jwt-simple');
//Imports the user model from Mongoose
const User = require('../models/user');
//Access Keys
const keys = require('../config/keys');

//Creates JSON Web Token for a user when they sign up - JWTs allow users to make additonal requests to our app without having to sign in each time, JWTs are created using the user id + a random string, the JWT is included in the header of user requests, when the app recieves the JWT it is decrypted and allows us to identify the user id and give them access to resources
function tokenForUser(user){
  //Saves the time and date
  const timestamp = new Date().getTime();
  //Creates a JWT for the user - sub: user.id - sets the subject (who the token belongs to) as the user id; iat: timestamp - issued at time, sets the date/time for when the token was issued, the date/time is captured when the function executes; keys.secret - encrypts the user id using a random string of characters
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.secret);
}
//Exports the sign in function that will give users a JWT - authenticates users for subsequent requests
exports.signin = function(req, res, next){
  //Gives the user a JWT - creates a token using the tokenForUser helper function, once the user is authenticated Passport.js saves the current user model (user account info) under req.user when the done() function is called, we can access this current user model and use it to create a token
  res.send({token:tokenForUser(req.user)});
}

//Exports the sign up function that will handle sign up requests (POST request to the /signup route) - req = incoming HTTP request, res = the response we send back to whoever made the request, next = used for error handling
exports.signup = function(req, res, next){
  //Saves the email and password from the body of the incoming request - req.body, Passport.js saves this info under req.body when the done() function is called
  const email = req.body.email;
  const password = req.body.password;

  //If there is no email or password - saved from req.body
  if(!email || !password){
    //Send back an HTTP status code of 422 (cannot be processed) and an error message that an email address and password must be provided
    return res.status(422).send({error: 'You must provide email and password'});
  }

  //Searches through the collection of users in MongoDB to see if a user with this email alreadys exists - once the search completes it executes a callback function, this function has an error argument (if search request failed) and a result argument (if email is found save user to existingUser, will be null if no user found)
  User.findOne({email: email}, function(err, existingUser){
    //If the search request to MongoDB fails - return the error (asynchronous)
    if(err) {return next(err);}

    //If the user already exists
    if(existingUser){
      //Send back an HTTP status code of 422 (cannot be processed) and an error message that the email is already in use
      return res.status(422).send({error: 'This email has already been used'});
    }

    //Create a new user - at ths point the email has not been found in MongoDB, create a new user instance using the User class + the email & password provided (saved above)
    const user = new User({
      email: email,
      password: password
    });

    //Saves the new user to MongoDB - takes the new user instance and saves it to MongoDB
    user.save(function(err){
      //If the user fails to save to MongoDB - return the error (asynchronous)
      if(err) {return next(err);}
      res.json({token: tokenForUser(user)});
    });
  })

}
