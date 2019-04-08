var express = require("express");
var nbaService = require("../services/NBAService");

var router = express.Router();

router.get("/shotchartdetail", function(req, res) {
	let team = req.query.team;
	let season = req.query.season;

	nbaService.getTeamShotChart(team, season).then(function(value) {
		let payload = value.data;
		res.send(payload);
	}).catch(function(err) {
		console.log(err);
		res.send("Error occurred!");
	});
});

module.exports = router;