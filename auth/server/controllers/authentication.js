//Exports the sign up function that will handle sign up requests (POST request to the /signup route) - req = incoming HTTP request, res = the response we send back to whoever made the request, next = used for error handling
exports.signup = function(req, res, next){
  res.send({success: 'true'});
}
