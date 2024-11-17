const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: 'brother_admin',
  password: 'EpsilonGamma24',
  database: 'brothers_db'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database' + connection.threadId);
});

module.exports = connection;

