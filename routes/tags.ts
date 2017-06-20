import * as express from 'express';
import passport = require('passport');
import jwt = require('jsonwebtoken');
import Tag from '../api/models/tag';

let router = express.Router();

router.post('/', (req, res) => {
    let tag:any = new Tag();
    tag.name = req.body.tag.name;
    tag.save(function(err, newTag) {
        if (err) {
            console.log(err);
        } else {
            res.end();
        }
    });

});

router.get('/', (req, res) => {
    Tag.find().then((tags)=> {
        res.json(tags);
    }).catch((err) => {
        res.status(500);
        console.error(err);
    })
});

router.get('/:id', (req, res) => {
    Tag.findById(req.params['id']).then((tag) => {
        res.json(tag);
    }).catch((err) => {
        res.status(500);
        console.error(err);
    });
});

router.post('/:id', (req, res) => {
    let tagId = req.params.id;
    Tag.findById(tagId).then((tag) => {
        tag.name = req.body.tag.name;
        tag.save().then((updatedTag) => {
            res.json(updatedTag);
        }).catch((err) => {
            res.status(400).json(err);
        });
    }).catch(() => {
        res.sendStatus(404);
    });
});

router.delete('/:id', (req, res) => {
    let tagId = req.params.id;
    Tag.remove({_id: tagId}).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        res.status(500);
        console.log(err);
    });
});

router.get('/tag/:slug', (req, res) => {
    Tag.find({name: req.params['slug']}).populate('posts').then((tags) => {
        res.json(tags);
    }).catch((err) => {
        res.status(500);
        console.log(err);
    });
});

export default router;
