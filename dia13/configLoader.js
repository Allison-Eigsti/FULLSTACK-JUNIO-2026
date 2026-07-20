const config = require('config');

module.exports = {
  env: process.env.NODE_ENV,
  port: config.get('port'),
  mongoURI: config.get('database.uri')
};


// WITH DOT ENV
// const dotenv = require('dotenv');

// const env = process.env.NODE_ENV || 'development';

// dotenv.config({
//   path: `.env.${env}`,
// });


// module.exports = {
//   env: process.env.NODE_ENV,
//   port: process.env.PORT,
//   mongoURI: process.env.MONGODB_URI,
// };