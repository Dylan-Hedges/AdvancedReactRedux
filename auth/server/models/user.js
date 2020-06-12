const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Library that encrypts plain text passwords - used to encrypt passwords before saving them to the database
const bcrypt = require('bcrypt-nodejs');


//Schema -defines the fields and types of data a Model will have (also set validation checks)
const userSchema = new Schema({
  //Email must be a string and unique and lowercase (makes email lowercase before being saved to the DB, prevents duplicate emails - case sensitive)
  email: {type: String, unique: true, lowercase: true},
  //Password must be string
  password: String
});

//Encrypts users password - .pre('save, function(next){ }') before the user model gets created, execute this function
userSchema.pre('save', function(next){
  //Accesses the user model
  const user = this;
  //Generates a salt then execute the function - salt is a randomly generated string of characters
  bcrypt.genSalt(10, function(err, salt){
    if (err) {return next(err);}
    //Hash the password - combine the salt and the plain text password to create a hash password (encrypted)
    bcrypt.hash(user.password, salt, null, function(err, hash){
      if (err) {return next(err);}
      //Overwrite the plain text password with the hash password (encrypted)
      user.password = hash;
      //Moves to the next step - save the model
      next();
    });
  });
});

//Adds a method to the user schema which compares the password the user entered to the password in MongoDB - candidatePassword = the password user provides when signing in
userSchema.methods.comparePassword = function(candidatePassword, callback){
  //Uses bcrypt to authenticate the user based on password - gets the salt used to encrypt the password in MongoDB, hashes the password the user entered (candidatePassword), checks the hashed password is the same as the hashed password in MongoDB (this.password), we dont actualy decrypt the password, if the hash is the same then the passwords match
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    //If there was an error (passwords didnt match) during the comparison, return the error
    if(err){ return callback(err);}
    //Otherwise (passwords matched) call the callback with isMatch (true)
    callback(null, isMatch);
  });
}
//Model - uses the userSchma to create new users (a new document/record) in the user collection in MongoDB
const ModelClass = mongoose.model('user', userSchema);

//Exports the Model so it can be used in other files
module.exports = ModelClass;
