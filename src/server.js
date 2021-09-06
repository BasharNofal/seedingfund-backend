'use strict';

const express = require("express");
const cors = require("cors");
const authRoutes = require("./auth/auth-routes");
const projectsRoutes = require("./projects/projects-routes");
const bearerAuth = require("./auth/middleware/bearer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/projects", projectsRoutes);
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
