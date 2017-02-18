var connection = require('./connection.js');

var orm = {
	selectAll: function() {
		var queryString = "SELECT ?? FROM ??";
		
		connection.query(queryString, ["*", "burgers"], function(err, result) {
			console.log(result);
			res.json(result);
		});
	},
	insertOne: function(burger_name, devoured) {
		var queryString = "INSERT INTO ?? (?, ?) VALUES (?, ?)";
		connection.query(queryString, ["burgers", "burger_name", "devoured", burger_name, devoured], function(err, result) {
			res.json(result);
		});
	},
	updateOne: function(id, devoured) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, ["burgers""devoured", devoured, "id", id], function(err, result) {
			res.json(result);
		});
	}
};

module.exports = orm;