module.exports = function(app){
  //Route Handler - For a GET HTTP request on the '/' route, execute the function, req = incoming HTTP request, res = the response we send back to whoever made the request, next = used for error handling
  app.get('/', function(req, res, next){
    res.send(['on','screen','response']);
  });
}
