"use strict";

const mongoose = require("mongoose");
require("dotenv").config();

const Projects = mongoose.Schema({
	userId: { type: String, required: true, trim: true },
	projectName: { type: String, required: true, trim: true },
	ProjectSector: { type: String, required: true, enum:["Industry", "Retail", "Real Estate"]},
	projectDescription: { type: String, required: true, trim: true },
	projectState: {
		type: String,
		enum: ["Approved", "Pending", "Rejected"],
		default: "Pending",
	},
});

module.exports = mongoose.model("projects", Projects);