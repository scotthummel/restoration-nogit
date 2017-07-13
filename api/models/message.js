"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var MessageSchema = new mongoose.Schema({
    title: String,
    body: String
});
exports.default = mongoose.model('Message', MessageSchema);
