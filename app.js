"use strict";
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var index_1 = require("./routes/index");
var users_1 = require("./routes/users");
var posts_1 = require("./routes/posts");
var tags_1 = require("./routes/tags");
var messages_1 = require("./routes/messages");
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('./api/models/user');
require('./api/models/post');
require('./api/models/tag');
require('./api/models/message');
require('./config/passport');
var connectionString = 'mongodb://joe:Rbwmt1717@ds161890.mlab.com:61890/restorationbwmt';
mongoose.connect(connectionString);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
app.use('/', index_1.default);
app.use('/api/v1/', users_1.default);
app.use('/api/v1/posts/', posts_1.default);
app.use('/api/v1/tags/', tags_1.default);
app.use('/api/v1/mail/', messages_1.default);
app.get('/*', function (req, res, next) {
    if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
    }
    else {
        return res.render('index');
    }
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err['status'] || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
var open = require("open");
open('http://localhost:3000');
module.exports = app;
