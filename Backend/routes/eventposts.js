const express = require('express');
var EventPost = require('../Models/EventPost.js');
var verify = require('../verify');

const router = express.Router();
router.route('/search')
    .get((req, res, next) => {
        // "gi" => g stands for global and i stands for ignore case
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        EventPost.find({name:regex})
            .then((Event) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Event);
            }, (err) => next(err))
            .catch((err) => next(err));
    })


function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

//CRUD functions of models data here....
router.route('/')
.get((req, res, next) => {

    console.log(req.user.id);
    EventPost.find({})
        .then((posts) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(posts);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.post((req, res, next) => {

    req.body.userid=req.user.id;
//    res.send(req.body);
EventPost.create(req.body)
        .then((post) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(post);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported!');
})
.delete((req, res, next) => {
    EventPost.deleteMany({})
        .then((reply) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(reply);
        }, (err) => next(err))
        .catch((err) => next(err));
});


    router.route('/findmyonlydata')
    .get((req, res, next) => {

        console.log(req.user.id);
        EventPost.find({userid:req.user.id})
            .then((post) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(post);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    router.route('/:id')
    .get((req, res, next) => {
        EventPost.findById(req.params.id)
            .then((post) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(post);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {

        console.log(req.body);
        console.log("--------------------------------------");
        console.log(req.params.id);
        console.log("--------------------------------------");

        EventPost.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((post) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(post);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        EventPost.findById(req.params.id)
            .then((post) => {

                post.delete()
                    .then((reply) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(reply);
                    })
            }).catch((err) => next(err));

            EventPost.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));


    });

module.exports = router