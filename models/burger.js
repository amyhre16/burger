var orm = require('./../config/orm.js');
var express = require('express');

var app = express();

var burger = {
	selectAll: function() {
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