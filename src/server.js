'use strict';

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("test");
});

module.exports = {
	server: app,
	start: (port) => {
		app.listen(port, () => {
			console.log("Server is running on port", port);
		});
	},
};
