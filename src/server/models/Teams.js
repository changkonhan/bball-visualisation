const TEAMS = [
	{
		"name": "atlantahawks",
		"id": "1610612737"
	},
	{
		"name": "bostonceltics",
		"id": "1610612738"
	},
	{
		"name": "brooklynnets",
		"id": "1610612751"
	},
	{
		"name": "charlottehornets",
		"id": "1610612766"
	},
	{
		"name": "chicagobulls",
		"id": "1610612741"
	},
	{
		"name": "clevelandcavaliers",
		"id": "1610612739"
	},
	{
		"name": "dallasmavericls",
		"id": "1610612742"
	},
	{
		"name": "denvernuggets",
		"id": "1610612743"
	},
	{
		"name": "detroitpistons",
		"id": "1610612765"
	},
	{
		"name": "goldenstatewarriors",
		"id": "1610612744"
	},
	{
		"name": "houstonrockets",
		"id": "1610612745"
	},
	{
		"name": "indianapacers",
		"id": "1610612754"
	},
	{
		"name": "losangelesclippers",
		"id": "1610612746"
	},
	{
		"name": "losangeleslakers",
		"id": "1610612747"
	},
	{
		"name": "memphisgrizzlies",
		"id": "1610612763"
	},
	{
		"name": "miamiheat",
		"id": "1610612748"
	},
	{
		"name": "milwaukeebucks",
		"id": "1610612749"
	},
	{
		"name": "minnesotatimberwolves",
		"id": "1610612750"
	},
	{
		"name": "neworleanspelicans",
		"id": "1610612740"
	},
	{
		"name": "newyorkknicks",
		"id": "1610612752"
	},
	{
		"name": "oklahomacitythunder",
		"id": "1610612760"
	},
	{
		"name": "orlandomagic",
		"id": "1610612753"
	},
	{
		"name": "philadelphia76ers",
		"id": "1610612755"
	},
	{
		"name": "phoenixsuns",
		"id": "1610612756"
	},
	{
		"name": "portlandtrailblazers",
		"id": "1610612757"
	},
	{
		"name": "sacramentokings",
		"id": "1610612758"
	},
	{
		"name": "sanantoniospurs",
		"id": "1610612759"
	},
	{
		"name": "torontoraptors",
		"id": "1610612761"
	},
	{
		"name": "utahjazz",
		"id": "1610612762"
	},
	{
		"name": "washingtonwizards",
		"id": "1610612764"
	}
];

var getTeamIdByName = function (teamName) {
	// match arg with team name
	let team = TEAMS.find(t => t.name == teamName.toLowerCase());
	
	if (team == undefined) {
		return  null;
	}

	return team.id;
};

module.exports = getTeamIdByName;