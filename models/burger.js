var orm = require('./../config/orm.js');

var burger = {
	selectAll: function(res, callback) {
		// console.log("burger.js");
		// console.log(orm.selectAll("burgers"));
		var burger = orm.selectAll("burgers", res, callback);
		// console.log(burger);
		// return burger;
		// return orm.selectAll("burgers");
	},
	insertOne: function (burger_name, res, callback) {
		return orm.insertOne("burgers", "burger_name", burger_name, res, callback);
	},
	updateOne: function(id, devoured, res, callback) {
		return orm.updateOne("burgers", {devoured: devoured}, {id: id}, res, callback);
	}
};

module.exports = burger;