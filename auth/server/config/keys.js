// Returns prod or dev keys - uses NODE_ENV variable to determine if application is in production or development
if (process.env.NODE_ENV === 'production'){
  //Returns production keys
  module.exports = require('./prod');
}else{
  //Returns development keys
  module.exports = require('./dev');
}
