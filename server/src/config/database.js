require('dotenv/config');
const path = require('path');

module.exports = {
  dialect: process.env.DB_DIALECT || 'sqlite',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: path.resolve('src', 'database', 'database.sqlite'),
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
