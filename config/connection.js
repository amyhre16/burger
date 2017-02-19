var mysql = require('mysql');

var connectInfo = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
};

if (process.env.JAWSDB_URL) {
	connectInfo = process.env.JAWSDB_URL;
}

var connection = mysql.createConnection(connectInfo);

connection.connect();

module.exports = connection;