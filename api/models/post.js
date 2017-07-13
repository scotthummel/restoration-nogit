"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
var postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A post title is required']
    },
    body: {
        type: String,
        required: [true, 'A post body is required']
    },
    slug: {
        type: String,
        unique: true
    }
});
postSchema.plugin(uniqueValidator);
exports.default = mongoose.model('Post', postSchema);
