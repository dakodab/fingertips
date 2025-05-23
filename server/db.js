const mysql = require('mysql2');
require('dotenv').config(); // <-- Make sure .env loads here too

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT) || 3306
});

module.exports = connection;