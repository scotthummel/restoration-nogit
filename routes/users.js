"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var passport = require("passport");
var user_1 = require("../api/models/user");
var router = express.Router();
router.post('/register', function (req, res) {
    var user = new user_1.default();
    user.username = (+new Date).toString(36);
    user.firstName = req.body.user.firstName;
    user.lastName = req.body.user.lastName;
    user.email = req.body.user.email;
    user.setPassword(req.body.user.password);
    user.save(function (err, newUser) {
        if (err) {
            console.log(err);
        }
        else {
            res.end();
        }
    });
});
router.post('/login/local', function (req, res, next) {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send("Please provide an email address and a password.");
    }
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            res.status(400).send('An unknown error occurred.');
        }
        if (user) {
            return res.json({ token: user.generateJWT() });
        }
        else {
            res.status(403).send('We could not find a user with those credentials.');
        }
    })(req, res, next);
});
exports.default = router;
