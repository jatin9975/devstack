// db.js

import mysql from 'mysql';

const db = mysql.createConnection({
  host: '127.0.0.1', // Use IPv4 address
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306 // Default MySQL port
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to database');
  }
});

export default db;
