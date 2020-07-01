const users = require('../models/Users');
const cucumber = require('cucumber').defineSupportCode;
const expect = require('chai').expect;

cucumber(function({ Given, Then, When }) {
        let user = {
            'FirstName': '',
            'LastName': '',
            'contactnumber': '',
            'Address': '',
            'email': '',
            'Country': '',
            'username': '',
            'password': '',
        };
        let created = false;

        Given('I want to register as an artist', function () {
        });


        When('I type all the user details', function () {
            user.FirstName = 'Sajak';
            user.LastName = 'Shresthe';
            user.contactnumber = '123123';
            user.Addres = 'Kathmandu';
            user.email = 'sajak@gmail.com';
            user.Country = 'Nepal';
            user.username = 'sajak';
            user.password = 'sajak1'
        });

        Then('I create a new user', function () {
            users.create(user);
            created = true;
            expect(created).to.equal(true);
        });
    });

