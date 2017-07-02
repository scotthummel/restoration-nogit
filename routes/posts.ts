import * as express from 'express';
import passport = require('passport');
import jwt = require('jsonwebtoken');
import Post from '../api/models/post';
import Tag from '../api/models/tag';

let router = express.Router();

router.post('/', (req, res) => {
    let post:any = new Post();
    post.title = req.body.post.title;
    post.body = req.body.post.body;
    post.slug = req.body.post.title.toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');

    post.save(function(err, newPost) {
        let tagIds = req.body.tags;
        try {
            tagIds.forEach(id => {
                Tag.findById(id).then((tag) => {
                    console.log(tag);
                    tag.posts.push(newPost._id);
                    tag.save();
                });
            });
        } catch(e){}
        if (err) {
             res.status(500).send(err).end();
        } else {
            res.end();
        }
    });

});

router.get('/', (req, res) => {
    Post.find().then((posts)=> {
        res.json(posts);
    }).catch((err) => {
        res.status(500);
        console.error(err);
    })
});

router.get('/:id', (req, res) => {
    Post.findById(req.params['id']).then((post) => {
        res.json(post);
    }).catch((err) => {
        res.status(500);
        console.error(err);
    });
});

router.post('/:id', (req, res) => {
    let postId = req.params.id;
    Post.findById(postId).then((post) => {
        post.title = req.body.post.title;
        post.body = req.body.post.body;

        post.save().then((updatedPost) => {
            res.json(updatedPost);
        }).catch((err) => {
            res.status(400).json(err);
        });

    }).catch(() => {
        res.sendStatus(404);
    });

});

router.delete('/:id', (req, res) => {
    let postId = req.params.id;
    Post.remove({_id: postId}).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        res.status(500);
        console.log(err);
    });
});

router.get('/post/:slug', (req, res) => {
    Post.findOne({slug: req.params['slug']}).then((post) => {
        res.json(post);
    }).catch((err) => {
        res.status(500);
        console.log(err);
    });
});


export default router;
