var orm = require('./../config/orm.js');

var burger = {
	selectAll: function() {
		console.log("burger.js");
		console.log(orm.selectAll("burgers"));
		return orm.selectAll("burgers");
	},
	insertOne: function (burger_name) {
		return orm.insertOne("burgers", "burger_name", burger_name);
	},
	updateOne: function(id, devoured) {
		return orm.updateOne("burgers", {devoured: devoured}, {id: id});
	}
};

module.exports = burger;