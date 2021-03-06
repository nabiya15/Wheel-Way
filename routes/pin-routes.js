// Dependencies 
var db = require("../models");

// Routes 
module.exports = function(app) {
	// Add a pin 
	app.post("/api/new", function(req, res) {
		console.log("Pin data:");
		console.log(req.body);

		db.Pin.create({
			markerType: req.body.markerType,
			description: req.body.description,
			lat: req.body.lat,
			lng: req.body.lng
		}).then(function(results) {
			// 'results' here would be the newly created pin 
			res.end();
		});

	});

	app.get("/api/pins", function(req, res) {
		db.Pin.findAll({})
		.then(function(results) {
			res.json(results)
			console.log(results);
		})
	})

	app.delete("/api/pins/:id", function(req, res) {
		db.Pin.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbPin) {
			res.json(dbPin);
		})
	})

};