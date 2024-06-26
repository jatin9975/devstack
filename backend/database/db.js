// db.js

import mysql from 'mysql';

const db = mysql.createConnection({
  host: process.env.DB_HOST, // Use IPv4 address
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to database');
  }
});

export default db;
