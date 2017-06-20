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
    return res.status(400).send("Please fill out every field");
  }
  passport.authenticate('local', function(err, user, info) {
    //console.log(user);
    if (err) {
      res.status(400);
    }
    if (user) {
      return res.json({ token: user.generateJWT() })
    }
    return res.status(400);
  })(req, res, next);
});

// router.post("/upload", function(req, res){
//   console.log('The id of the user is' + req['payload']['id']);
//   res.end();
// });


export default router;

