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
  


module.exports = router