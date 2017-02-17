var mysql = require('mysql');

var PORT = process.env.PORT || 8080;

var connectInfo = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'secret',
	database: 'burgers_db'
});

if (process.env.JAWSDB_URL) {
	connectInfo = process.env.JAWSDB_URL;
}

var connection = mysql.createConnection(connectInfo);

connection.connect();

module.exports = connection;