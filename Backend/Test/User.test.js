const users = require('../Models/users');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test_Artist_Hub';
const id = "55555";

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
    it('Should be able create a users', () => {
        const user = {
            'FirstName': 'asd',
            'LastName': 'asd',
            'contactnumber': '123123',
            'Address': 'asd',
            'email': 'asd@asd.com',
            'Country': 'asd ',
            'username': 'sbc',
            'password': 'asd',
        };
        // const hero_1 = await Heroes.create(hero);
        return users.create(user)
            .then((post_1) => {
                expect(post_1.username).toEqual('sbc');
            });
    })
});