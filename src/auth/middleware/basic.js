"use strict";

const base64 = require("base-64");
const Users = require("../models/users-model");

module.exports = async (req, res, next) => {
    try {
        let basicHeaderParts = req.headers.authorization.split(" ");
        let encodedString = basicHeaderParts.pop();
        let decodedString = base64.decode(encodedString);
        let [username, password] = decodedString.split(":");
        try {
            req.userInfo = await Users.authenticateBasic(username, password)
            next();
          } catch (error) {
            console.error(error)
          }
    } catch (error) {
        console.log(error)
    }
};
