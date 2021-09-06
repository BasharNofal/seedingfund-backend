"use strict";

const base64 = require("base-64");
const users = require("../models/users-model");

module.exports = async (req, res, next) => {
    try {
        let basicHeaderParts = req.headers.authorization.split(" ");
        let encodedString = basicHeaderParts.pop();
        let decodedString = base64.decode(encodedString);
        let [username, password] = decodedString.split(":");
        const valid = await users.authenticateBasic( username, password );
        if(valid) {
            req.userInfo = { user: valid}
            next();
        } else {
            next('invalid username or password');
        }
    } catch (error) {
        console.log(error)
    }
};
