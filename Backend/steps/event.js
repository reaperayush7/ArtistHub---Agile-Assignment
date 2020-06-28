const EventPost = require('../models/EventPost');
const cucumber = require('cucumber').defineSupportCode;
const expect = require('chai').expect;
const userid='userid'

cucumber(function({ Given, Then, When }) {
    const eventpost = {
        'name': '',
        'JobType': '',
        'Applicant': '',
        'Deadline': '',
        'Salary': '',
        'Description': '',
        'cv': '',
        'userid':userid
    };

    Given('I want to add an event as an event organiser', function () {
    });


    When('I type the event details', function () {
        eventpost.name='New Event';
        eventpost.JobType = "Guitarist";
        eventpost.Applicant = '2';
        eventpost.Deadline = '01/05/2020';
        eventpost.Salary = '20000';
        eventpost.Description = 'Event added. Please apply if you are eligible';
        eventpost.cv = 'img.pdf'
    });

    Then('I create a new event', function () {
        EventPost.create(eventpost)
            .then((eventpost) => {
                updateId=eventpost._id
                expect(eventpost.name).equal('New Event');
            });
    });
});

