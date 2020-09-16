const express = require('express');
var Artist = require('../Models/Artist');
// var verify = require('../verify');
var fs = require('fs');
const router = express.Router();

//Course CRUD functions of models data here....
router.route('/')
.get((req, res, next) => {
    Artist.find({})
        .then((Artists) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(Artists);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.post((req, res, next) => {
//    res.send(req.body);
Artist.create(req.body)
        .then((Artist) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(Artist);
        }, (err) => next(err))
        .catch((err) => next(err));
});

// yo update and delete grna na dine 

// .put((req, res, next) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported!');
// })
// .delete((req, res, next) => {
//     Publisher.deleteMany({})
//         .then((reply) => {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(reply);
//         }, (err) => next(err))
//         .catch((err) => next(err));
// });

router.route('/:id')
    .get((req, res, next) => {
        Artist.findById(req.params.id)
            .then((Artist) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Artist);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        Artist.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((Artist) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Artist);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Artist.findById(req.params.id)
            .then((Artist) => {
                let path = './public/images/' + Artist.image;
                fs.unlink(path, (err) => {
                    if (err) console.log(err);
                })
                Artist.delete()
                    .then((reply) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(reply);
                    })
            }).catch((err) => next(err));

            Artist.findByIdAndDelete(req.params.id)
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
    Artist.findById(req.params.id)
        .then((Artist) => {
            if (Artist != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Artist.comments);
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
    Artist.findById(req.params.id)
        .then((Artist) => {
            if (Artist != null) {
                Artist.comments.push(req.body);
                Artist.save()
                    .then((Artist) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(Artist);
                    }, (err) => next(err));
            } else {
                err = new Error('Artist ' + req.params.id + ' not found');
                err.status = 404;
                return next(err);
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});





module.exports = router