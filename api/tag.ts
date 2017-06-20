import * as express from 'express';
import Tag from './models/tag';

let router = express.Router();

router.get('/blog/tag/:slug', (req, res) => {
    Tag.find({name: req.params['slug']}).populate('posts').then((tags) => {
        res.json(tags);
    }).catch((err) => {
        res.status(500);
        console.log(err);
    });
});

export default router;