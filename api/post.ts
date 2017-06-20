import * as express from 'express';
import Post from './models/post';
import Tag from './models/tag';

let router = express.Router();

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

router.post('/', (req, res) => {
    let post = new Post();
    post.title = req.body.title;
    post.body = req.body.body;
    post.createdAt = new Date().toLocaleString();

    post.save().then((newPost) => {
        console.log('test');
        let tags = new Tag();
        tags.posts.push(newPost);
        tags.save();

        res.json(newPost);
    }).catch((err) => {
        res.status(400).json(err);
    });
});

router.post('/:id', (req, res) => {
    let postId = req.params.id;

    Post.findById(postId).then((post) => {
        post.title = req.body.title;
        post.body = req.body.body;
        post.updatedAt = new Date().toLocaleString();

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

export default router;
