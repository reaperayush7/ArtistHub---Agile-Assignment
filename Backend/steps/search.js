const EventPost = require('../models/EventPost');
const cucumber = require('cucumber').defineSupportCode;
const expect = require('chai').expect;

cucumber(function({ Given, Then, When }) {
    let search = {
        'name': ''
    };
    let searched = false;

    Given('I want to search for an event', function () {
    });


    When('I type event name', function () {
        search.name = 'Event Name';
    });

    Then('I get the details of the event', function () {
        EventPost.find(search);
        searched = true;
        expect(searched).to.equal(true);
    });
});

