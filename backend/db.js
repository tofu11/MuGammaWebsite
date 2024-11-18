const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '10.84.159.240', //IP address for the host here should be the private IPV4 address under ipconfig for the wirelesss lan adapter
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

