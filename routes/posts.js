"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var post_1 = require("../api/models/post");
var tag_1 = require("../api/models/tag");
var router = express.Router();
router.post('/', function (req, res) {
    var post = new post_1.default();
    post.title = req.body.post.title;
    post.body = req.body.post.body;
    post.slug = req.body.post.title.toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
    post.save(function (err, newPost) {
        var tagIds = req.body.tags;
        try {
            tagIds.forEach(function (id) {
                tag_1.default.findById(id).then(function (tag) {
                    console.log(tag);
                    tag.posts.push(newPost._id);
                    tag.save();
                });
            });
        }
        catch (e) { }
        if (err) {
            res.status(500).send(err).end();
        }
        else {
            res.end();
        }
    });
});
router.get('/', function (req, res) {
    post_1.default.find().then(function (posts) {
        res.json(posts);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
router.get('/:id', function (req, res) {
    post_1.default.findById(req.params['id']).then(function (post) {
        res.json(post);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
router.post('/:id', function (req, res) {
    var postId = req.params.id;
    post_1.default.findById(postId).then(function (post) {
        post.title = req.body.post.title;
        post.body = req.body.post.body;
        post.save().then(function (updatedPost) {
            res.json(updatedPost);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    }).catch(function () {
        res.sendStatus(404);
    });
});
router.delete('/:id', function (req, res) {
    var postId = req.params.id;
    post_1.default.remove({ _id: postId }).then(function () {
        res.sendStatus(200);
    }).catch(function (err) {
        res.status(500);
        console.log(err);
    });
});
router.get('/post/:slug', function (req, res) {
    post_1.default.findOne({ slug: req.params['slug'] }).then(function (post) {
        res.json(post);
    }).catch(function (err) {
        res.status(500);
        console.log(err);
    });
});
exports.default = router;
