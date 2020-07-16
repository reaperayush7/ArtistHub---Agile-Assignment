const Applyevent = require('../models/Applyevent');
const mongoose = require('mongoose');
const url = 'mongodb+srv://Ayush:Geekayush1@cluster0.tdwm5.gcp.mongodb.net/agile?retryWrites=true&w=majority';

const cucumber = require('cucumber').defineSupportCode;
const expect = require('chai').expect;
const userid='userid'


cucumber(function({ Before,Given, Then, When }) {
    const ApplyEvent = {
        'number': '',
        'cv': '',
        'user':"",
        'eventpost':""
    };

    Given('I want to apply for an event as a artist', function () {
    });


    When('I provide my details', function () {
        ApplyEvent.number = '12345678';
        ApplyEvent.cv = 'sampleCV';
        ApplyEvent.user = '5f14467fba23fb21e437c641';
        ApplyEvent.eventpost = '5f14467fba23fb21e437c641';
    });

    Then('I apply for that event', function () {
        Applyevent.create(ApplyEvent)
        expect(ApplyEvent.number).to.equal('12345678');
    });
});
