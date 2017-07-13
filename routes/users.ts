import * as express from 'express';
import passport = require('passport');
import jwt = require('jsonwebtoken');
import User from '../api/models/user';

let router = express.Router();

// let auth = jwt.sign({
//   secret: "SecretKey",
//   userProperty: "payload"
// }, 'SecretKey');


router.post('/register', (req, res) => {
  let user:any = new User();
  user.username = (+new Date).toString(36);
  user.firstName = req.body.user.firstName;
  user.lastName = req.body.user.lastName;
  user.email = req.body.user.email;
  user.setPassword(req.body.user.password);
  user.save(function(err, newUser) {
    if (err) {
      console.log(err);
    } else {
      res.end();
    }
  });
});

router.post('/login/local', function(req, res, next) {
  if(!req.body.email || !req.body.password) {
    return res.status(400).send("Please provide an email address and a password.");
  }
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      res.status(400).send('An unknown error occurred.');
    }
    if (user) {
      return res.json({ token: user.generateJWT() })
    } else {
      res.status(403).send('We could not find a user with those credentials.')
    }
    //return res.status(400);
  })(req, res, next);
});

export default router;

