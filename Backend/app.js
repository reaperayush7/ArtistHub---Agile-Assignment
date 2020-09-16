//JWT jsonwebtoken -> token 

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require ('passport');
var authenticate = require('./authenticate');
var auth = require('./verify');
var cors = require('cors');
const bodyparser = require('body-parser');

const testurl = 'mongodb://localhost:27017/test_jobArtist';
const url = 'mongodb://localhost:27017/Artist_Hub';
const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
});

connect.then((db) => {
    console.log("Connected to mongodb server running on 3000 port");
}, (err) => { console.log(err); });

//Giving routes path here
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');
var uploadRouter = require('./routes/uploads');
var CvRouter = require('./routes/cv');
var EventPostsRouter = require('./routes/EventPosts');
var eventorganizerRouter = require('./routes/eventorganizer');
var applyRouter = require('./routes/apply');
var artistsRouter = require('./routes/artists');
var userRouter = require('./routes/user');
var app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    name: 'session-id',
    secret: 'mysessionkey',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));

app.use(passport.initialize());
app.use(passport.session());

// yo tala ko..
//esmma afno frontend ko url use gara #bibash

app.use('*', cors({
    origin: 'http://127.0.0.1:8080',
    credentials: true
}));

// yo auth paxi use gara backend kamm sakera.. last ma milau ne ho frontend vayo vane..

// function auth(req, res, next) {
//     console.log(req.user);
//     if (!req.user) {
//         let err = new Error("You are not authenticated!");
//         err.status = 403;
//         return next(err);
//     } else {
//         next();
//     }
// }


// using routes here

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use(auth);
app.use('/eventorganizer', eventorganizerRouter);
app.use('/artists', artistsRouter);
app.use('/uploads', uploadRouter);
app.use('/cvupload', CvRouter);
app.use('/post', postRouter);
app.use('/EventPosts', EventPostsRouter);
app.use('/user', userRouter);
app.use('/apply', applyRouter);

module.exports = app;
