"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
var tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tag name is required']
    },
    slug: {
        type: String,
        unique: true
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});
tagSchema.plugin(uniqueValidator);
exports.default = mongoose.model('Tag', tagSchema);
