"use strict";

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const Users = mongoose.Schema({
	email: { type: String, required: true, unique: true, trim:true },
	username: { type: String, required: true, unique: true, trim:true },
	password: { type: String, required: true, trim:true },
	userType: {
		type: String,
		enum: ["admin", "user"],
		default: "user",
	},
});

Users.virtual("token").get(function () {
	let tokenObj = {
		username: this.username,
	};
	return jwt.sign(tokenObj, process.env.SECRET);
});

Users.pre("save", async function () {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10);
	}
});

Users.statics.authenticateBasic = async function (username, password) {
	try {
        const user = await this.findOne({ username });
		const valid = await bcrypt.compare(password, user.password);
		if (valid) {
			return user;
		}
		throw new Error("Invalid User");
	} catch (error) {
		throw new Error(error.message);
	}
};

Users.statics.authenticateWithToken = async function (token) {
	try {
		const parsedToken = jwt.verify(token, process.env.SECRET);
		const user = await this.findOne({ username: parsedToken.username });
		if (user) {
			return user;
		}
	} catch (e) {
		throw new Error(e.message);
	}
};
	
module.exports = mongoose.model("users", Users);