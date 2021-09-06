"use strict";

const mongoose = require("mongoose");
require("dotenv").config();

const Projects = mongoose.Schema({
	userId: { type: String, required: true, trim: true },
	projectName: { type: String, required: true, trim: true },
	projectDescription: { type: String, required: true, trim: true },
	projectState: {
		type: String,
		enum: ["approved", "pending", "rejected"],
		default: "pending",
	},
});

module.exports = mongoose.model("interviews", Projects);