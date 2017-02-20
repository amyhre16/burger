'use strict';

var burger = require('./../models/burger.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		burger.selectAll(res, renderPage);
	});

	app.post('/', function(req, res) {
		burger.insertOne(req.body.burger_name, res, redirectPage);
	});

	app.put('/', function(req, res) {
		burger.updateOne(req.body.id, 1, res, redirectPage);
	});
};

function renderPage(result, res) {
	res.render('index', {burgers: result});
}

function redirectPage(res) {
	res.redirect('/');
}