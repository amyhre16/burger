'use strict';

var express = require('express');
var burger = require('./../models/burger.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		var burgers = burger.selectAll();
		console.log("burgers");
		console.log(burgers);
		res.render('index', {burgers: burgers});
		// res.json(burger.selectAll());
	});

	app.post('/insertOne', function(req, res) {
		res.json(burger.insertOne(req.body.burger_name));
	});

	app.post('/updateOne', function(req, res) {
		res.json(burger.updateOne(req.body.id, req.body.devoured));
	});
};