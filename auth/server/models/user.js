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
//Model - uses the userSchma to create new users (a new document/record) in the user collection in MongoDB
const ModelClass = mongoose.model('user', userSchema);

//Exports the Model so it can be used in other files
module.exports = ModelClass;
