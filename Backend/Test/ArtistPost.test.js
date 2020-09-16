const EventPost = require('../models/EventPost');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test_Artist_Hub';
const userid='userid'
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {
    // await mongoose.connection.dropCollection('heros');
    // await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
});

describe('eventposts Schema', () => {
    it('Should be able create a eventposts', () => {
        const eventpost = {
            'name': 'asd',
            'JobType': 'Guitarist',
            'Applicant': '2',
            'Deadline': '01/05/2020',
            'Salary': '50000',
            'Description': 'kam garna aaye aaunus ',
            'cv': 'img.pdf',
        'userid':userid
        };
        // const hero_1 = await Heroes.create(hero);
        return EventPost.create(eventpost)
            .then((eventpost_1) => {
                expect(eventpost_1.name).toEqual('asd');
            });
    })
});