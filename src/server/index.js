const express = require("express");
const app = express();
const port = 3001;

const stats = require("./routes/StatsApi");

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use("/stats", stats);

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
});