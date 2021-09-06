"use strict";

const mongoose = require("mongoose");
require("dotenv").config();

const option = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(process.env.MONGODB_URI, option)
	.then(() => {
		require("./src/server").start(process.env.PORT);
	})
	.catch((error) => {
		console.log("AN ERROR OCCURRED WHILE CONNECTING TO DATA BASE", error);
	});
