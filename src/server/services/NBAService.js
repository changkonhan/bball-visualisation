var axios = require("axios");
var getTeamIdByName = require("../models/Teams");

const HttpClient = axios.create({
	baseURL: "https://stats.nba.com/stats"
});

var getTeamShotChart = function(teamName, season) {
	if (teamName == null || season == null) {
		return Promise.reject("Invalid team name");
	}

	const teamId = getTeamIdByName(teamName);
    const teamShotChartUri = `/shotchartdetail?AheadBehind=&CFID=155&CFPARAMS=${season}&ClutchTime=&Conference=&ContextFilter=&ContextMeasure=FGA&DateFrom=&DateTo=&Division=&EndPeriod=10&EndRange=28800&GROUP_ID=&GameEventID=&GameID=&GameSegment=&GroupID=&GroupMode=&GroupQuantity=5&LastNGames=0&LeagueID=00&Location=&Month=0&OnOff=&OpponentTeamID=0&Outcome=&PORound=0&Period=0&PlayerID=0&PlayerID1=&PlayerID2=&PlayerID3=&PlayerID4=&PlayerID5=&PlayerPosition=&PointDiff=&Position=&RangeType=0&RookieYear=&Season=${season}&SeasonSegment=&SeasonType=Regular%20Season&ShotClockRange=&StartPeriod=1&StartRange=0&StarterBench=&TeamID=${teamId}&VsConference=&VsDivision=&VsPlayerID1=&VsPlayerID2=&VsPlayerID3=&VsPlayerID4=&VsPlayerID5=&VsTeamID=%27`;

    return HttpClient({
        method: "GET",
        url: teamShotChartUri
    });
};

module.exports = {
	getTeamShotChart
};