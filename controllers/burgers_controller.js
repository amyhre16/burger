'use strict';

// var express = require('express');
var burger = require('./../models/burger.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		// var burgers = burger.selectAll(consoleLog);
		/*console.log("burgers");
		console.log(burgers);*/
		/*var burgersArr = [
			{
				id: 1,
				burger_name: "blt",
				devoured: 0
			},
			{
				id: 2,
				burger_name: "cheese",
				devoured:0
			},
			{
				id: 3,
				burger_name: "bbq",
				devoured: 1
			}
		];*/
		// var burgersArr = burger.selectAll(consoleLog);
		// console.log(burgersArr);
		// res.render('index', {burgers: burger.selectAll(consoleLog)});
		burger.selectAll(res, renderPage);
		// res.render('index', {burgers: burger.selectAll(consoleLog, res)});
		// res.json(burger.selectAll());
	});

	app.post('/insertOne', function(req, res) {
		burger.insertOne(req.body.burger_name, res, renderUpdatedDB);
	});

	app.post('/updateOne', function(req, res) {
		burger.updateOne(req.body.id, 1, res, renderUpdatedDB);
	});
};

function renderPage(result, res) {
	/*console.log("result");
	console.log(result);*/
	// return result;
	res.render('index', {burgers: result});
}

function renderUpdatedDB(res) {
	burger.selectAll(res, renderPage);
}