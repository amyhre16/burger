var connection = require('./connection.js');

var orm = {
	selectAll: function() {
		var queryString = "SELECT ?? FROM ??";
		
		connection.query(queryString, ["*", "burgers"], function(err, result) {
			console.log(result);
			res.json(result);
		});
	},
	insertOne: function() {

	},
	updateOne: function() {

	}
};

module.exports = orm;