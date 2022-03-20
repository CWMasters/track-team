const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'masters2121',
        database: 'team'
    },
    console.log('Connected to the Team database.')
);

module.exports = db;