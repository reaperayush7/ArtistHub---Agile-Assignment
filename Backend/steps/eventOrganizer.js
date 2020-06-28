const EventOrganizer = require('../models/EventOrganizer');
const cucumber = require('cucumber').defineSupportCode;
const expect = require('chai').expect;
const userid='userid'

cucumber(function({ Given, Then, When }) {
    let Organizer = {
        'name': '',
        'contact': '',
        'Address': '',
        'email': '',
        'userid':userid
    };

    Given('I want to register as an event organizer', function () {
    });


    When('I type all the details required', function () {
       Organizer.name = 'Cypher Hotel';
       Organizer.contact = '12345678';
       Organizer.Address = 'Gongabu';
       Organizer.email = 'cypherh@gmail.com';
    });

    Then('I create a new event organizer', function () {
        EventOrganizer.create(Organizer)
        expect(Organizer.name).to.equal('Cypher Hotel');
    });
});

