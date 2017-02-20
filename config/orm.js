var connection = require('./connection.js');

var orm = {
	selectAll: function(table, res, callback) {
		var queryString = "SELECT * FROM ??";
		
		connection.query(queryString, [table], function(err, result) {
			// console.log("result");
			if (err) throw err;

			callback(result, res);
			/*var burger = result;
			console.log(burger);
			return burger;*/
			// return result;
		});
	},
	insertOne: function(table, columns, values, res, callback) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [table, columns, values], function(err, result) {
			if (err) throw err;

			// return result;
			callback(res);
		});
	},
	updateOne: function(table, setClause, whereClause, res, callback) {
		var queryString = "UPDATE ?? SET ? WHERE ?";
		connection.query(queryString, [table, setClause, whereClause], function(err, result) {
			if (err) throw err;
			
			callback(res);
			// return result;
		});
	}
};

module.exports = orm;