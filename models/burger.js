var orm = require('./../config/orm.js');

var burger = {
	selectAll: function(callback) {
		// console.log("burger.js");
		// console.log(orm.selectAll("burgers"));
		var burger = orm.selectAll("burgers", callback);
		// console.log(burger);
		// return burger;
		// return orm.selectAll("burgers");
	},
	insertOne: function (burger_name) {
		return orm.insertOne("burgers", "burger_name", burger_name);
	},
	updateOne: function(id, devoured) {
		return orm.updateOne("burgers", {devoured: devoured}, {id: id});
	}
};

module.exports = burger;