const express = require('express');
var EventPost = require('../Models/Applyevent');
var verify = require('../verify');

const router = express.Router();

//CRUD functions of models data here....
router.route('/')
.get((req, res, next) => {

    console.log(req.user.id);
    EventPost.find({})
    .populate('user')
    .populate('EventPost')
        .then((posts) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(posts);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.post((req, res, next) => {

    req.body.user=req.user.id;
//    res.send(req.body);
EventPost.create(req.body)
        .then((post) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(post);
        }, (err) => next(err))
        .catch((err) => next(err));
})


  
router.route('/findmyonlydata')
.get((req, res, next) => {

    console.log(req.user.id);
    EventPost.find({user:req.user.id})
    .populate('user')
    .populate('EventPost')
        .then((post) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(post);
        }, (err) => next(err))
        .catch((err) => next(err));
})
    

module.exports = router