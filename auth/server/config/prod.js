//Keys for production - access environment variables (e.g. Heroku)
module.exports = {
  mongoURI: process.env.MONGO_URI,
  secret: process.env.MONGO_URI
}
