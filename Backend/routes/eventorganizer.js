const express = require('express');
var EventOrganizer = require('../Models/EventOrganizer');
// var verify = require('../verify');
var fs = require('fs');
const router = express.Router();

// CRUD functions of models data here....
router.route('/')
.get((req, res, next) => {
EventOrganizer.find({})
        .then((publishes) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(publishes);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.post((req, res, next) => {
req.body.userid=req.user.id;
EventOrganizer.create(req.body)
        .then((publish) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(publish);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported!');
})
.delete((req, res, next) => {
    EventOrganizer.deleteMany({})
        .then((reply) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(reply);
        }, (err) => next(err))
        .catch((err) => next(err));
});



    router.route('/:id')
    .get((req, res, next) => {

        console.log(req.user.id);
        EventOrganizer.find({userid:req.user.id})
            .then((publish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(publish);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        EventOrganizer.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((publish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(publish);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        EventOrganizer.findById(req.params.id)
            .then((publish) => {
                let path = './public/images/' + publish.image;
                fs.unlink(path, (err) => {
                    if (err) console.log(err);
                })
                publish.delete()
                    .then((reply) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(reply);
                    })
            }).catch((err) => next(err));

            EventOrganizer.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

    // yaa dekhi comments ko suru hunx

    router.route('/:id/comments')
    .get((req, res, next) => {
        EventOrganizer.findById(req.params.id)
            .then((EventOrganizer) => {
                if (EventOrganizer != null) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(EventOrganizer.comments);
                }
                else {
                    err = new Error('Hero ' + req.params.id + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    
    .post((req, res, next) => {
        EventOrganizer.findById(req.params.id)
            .then((EventOrganizer) => {
                if (EventOrganizer != null) {
                    EventOrganizer.comments.push(req.body);
                    EventOrganizer.save()
                        .then((EventOrganizer) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(EventOrganizer);
                        }, (err) => next(err));
                } else {
                    err = new Error('EventOrganizer ' + req.params.id + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = router