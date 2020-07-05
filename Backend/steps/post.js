const Post = require('../models/Post');
const cucumber = require('cucumber').defineSupportCode;
const expect = require('chai').expect;
const userid='userid'

cucumber(function({ Given, Then, When }) {
    const post = {
        'description': '',
        'userid':userid
    };

    Given('I want to add a post', function () {
    });


    When('I type the post description', function () {
        post.description = 'This is a example of a post';
    });

    Then('I create a new post', function () {
         Post.create(post);
        expect(post.description).to.equal('This is a example of a post');
    });
});

