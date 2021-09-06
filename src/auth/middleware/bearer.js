'use strict';

const users = require('../models/users-model');

module.exports = async (req, res, next) => {
    try {
        console.log(req.headers.authorization)
        if(!req.headers.authorization) {
            next('invalid login');
            return
        }
        const token = req.headers.authorization.split(' ').pop();
        const validUser = await users.authenticateWithToken(token);
        req.user = validUser;
        req.token = token;
        next();
    } catch (error) {
        res.status(403).send('Invalid Login');
    }
}