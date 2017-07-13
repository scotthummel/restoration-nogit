"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var message_1 = require("../api/models/message");
var nodemailer = require('nodemailer');
var router = express.Router();
router.post('/', function (req, res) {
    var message = new message_1.default();
    message.name = req.body.message.name;
    message.phone = req.body.message.phone;
    message.email = req.body.message.email;
    message.body = req.body.message.body;
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'rbwmtaz@gmail.com',
            pass: 'sober521'
        }
    });
    var text = "Name: " + message.name + ", Phone: " + message.phone + ", Email: " + message.email + ", Message: " + message.body;
    var html = "<strong>Name:</strong> " + message.name + "<br /> <strong>Phone:</strong> " + message.phone + "<br /> <strong>Email:</strong> " + message.email + "<br /><strong>Message:</strong> " + message.body + "<br />";
    var mailOptions = {
        from: '"Restoration Bodywork and Massage Therapy" <rbwmt@gmail.com>',
        to: 'scotthummel@icloud.com',
        subject: 'Message from the Website',
        text: text,
        html: html
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        return info.response;
    });
});
exports.default = router;
