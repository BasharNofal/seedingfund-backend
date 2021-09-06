"use strict";

const express = require("express");
const User = require("./models/users-model");
const basicAuth = require("./middleware/basic");
// const bearerAuth = require("./middleware/bearer");
const router = express.Router();

const signup = async (req, res, next) => {
	try {
		let user = new User(req.body);
		const userRecord = await user.save();
		const output = {
			user: userRecord,
			token: userRecord.token,
		};
		res.status(201).json(output);
	} catch (e) {
		next(e.message);
	}
};

const signin = async (req, res) => {
	try {
        console.log(req.userInfo)
		res.status(200).json(req.userInfo);
	} catch (error) {
		res.status(403).send("Invalid username or password");
	}
};

router.post("/signup", signup);
router.post("/signin", basicAuth, signin);

module.exports = router;
