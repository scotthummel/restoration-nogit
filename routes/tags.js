"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var tag_1 = require("../api/models/tag");
var router = express.Router();
router.post('/', function (req, res) {
    var tag = new tag_1.default();
    if (req.body.tag !== undefined) {
        tag.name = req.body.tag.name;
        tag.slug = req.body.tag.name.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
        tag.save(function (err, newTag) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.end();
            }
        });
    }
});
router.get('/', function (req, res) {
    tag_1.default.find().then(function (tags) {
        res.json(tags);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
router.get('/:id', function (req, res) {
    tag_1.default.findById(req.params['id']).then(function (tag) {
        res.json(tag);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
router.post('/:id', function (req, res) {
    var tagId = req.params.id;
    tag_1.default.findById(tagId).then(function (tag) {
        tag.name = req.body.tag.name;
        tag.save().then(function (updatedTag) {
            res.json(updatedTag);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    }).catch(function () {
        res.sendStatus(404);
    });
});
router.delete('/:id', function (req, res) {
    var tagId = req.params.id;
    tag_1.default.remove({ _id: tagId }).then(function () {
        res.sendStatus(200);
    }).catch(function (err) {
        res.status(500);
        console.log(err);
    });
});
router.get('/tag/:slug', function (req, res) {
    tag_1.default.find({ slug: req.params['slug'] }).populate('posts').then(function (tags) {
        res.json(tags);
    }).catch(function (err) {
        res.status(500);
        console.log(err);
    });
});
exports.default = router;
