const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema -defines the fields and types of data a Model will have (also set validation checks)
const userSchema = new Schema({
  //Email must be a string and unique and lowercase (makes email lowercase before being saved to the DB, prevents duplicate emails - case sensitive)
  email: {type: String, unique: true, lowercase: true},
  //Password must be string
  password: String
});

//Model - uses the userSchma to create new users (a new document/record) in the user collection in MongoDB
const ModelClass = mongoose.model('user', userSchema);

//Exports the Model so it can be used in other files
module.exports = ModelClass;
