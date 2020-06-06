//Authentication library - cookie based, allows users to access routes that require login (authenticates the user based on a JWT)
const passport = require('passport');
//Imports the mongoose user model
const User = require('../models/user');
//Contains the secret string used to encrypt the JWT
const keys = require('../config/keys');
//Authenticates a user using the Passport.js JWT Strategy - Passport.js contains many different strategies to authenticate users (e.g. JWT strategy, username & password strategy, Facebook strategy), in this case we use the JWT strategy
const JwtStrategy =  require('passport-jwt').Strategy;
//Tells the JwtStrategy where the JWT is located in the request header and the location for the string used to decrypt it
const ExtractJwt = require('passport-jwt').ExtractJwt;

//Tells JwtStrategy where in the header to extract the JWT - the JWT token can be anywhere in the request (e.g header, body)
const jwtOptions = {
  //Tells JwtStrategy to extract the JWT under the request header -> authorization
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  //Tells JwtStrategy to decrypt the JWT using the random string of characters found in keys.secret
  secretOrKey: keys.secret
};

//Decrypts the JWT and searches for the user id in MongoDB - creates a new JWT strategy which authenticates a user using a JWT, allows users to access to a restrict routes (routes that require login); payload - the decrypted JWT token (contains user id & date/time JWT issued); jwtOptions - defines where to extract the encrypted JWT and the location for the secret string used to decrypt it; done - passes the user object (successful) or false (failed) to the done callback function (informs passport the user was/wasn't found)
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  //Searches for the user id in MongoDB - payload.sub = the user id obtained from the decrypted JWT
  User.findById(payload.sub, function(err, user){
    //If the MongoDB search failed return an error object and false (no user object) to the done callback
    if(err){return done(err, false);}
    //If the user is found in MongoDB
    if (user){
      //Return the user object to Passport.js
      done(null, user);
    }else{
      //If the user is not found in MongoDB return false
      done(null, false)
    }
  })
});

//Tells passport.js to use the jwtLogin
passport.use(jwtLogin);
