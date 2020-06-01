//Imports the user model from Mongoose
const User = require('../models/user');

//Exports the sign up function that will handle sign up requests (POST request to the /signup route) - req = incoming HTTP request, res = the response we send back to whoever made the request, next = used for error handling
exports.signup = function(req, res, next){
  //Saves the email and password from the body of the incoming request
  const email = req.body.email;
  const password = req.body.password;

  //Searches through the collection of users in MongoDB to see if a user with this email alreadys exists - once the search completes it executes a callback function, this function has an error argument (if search request failed) and a result argument (if email is found save user to existingUser, will be null if no user found)
  User.findOne({email: email}, function(err, existingUser){
    //If the search request to MongoDB fails - return the error (asynchronous)
    if(err) {return next(err);}

    //If the user already exists - send back an HTTP status code of 422 (cannot be processed) and an error message that the email is already in use
    if(existingUser){
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
      res.json(user)
    });
  })

}
