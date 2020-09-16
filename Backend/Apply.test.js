const Applyevent = require('../Models/Applyevent');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test_ArtistHub';




beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false
    });
});

afterAll(async () => {
    // await mongoose.connection.dropCollection('heros');
    // await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
});

describe("GET / - ApplyEvent Details", () => {
    it("Users get function test", async () => {
        const req = {
            limit: 10, offset:0
        }
        const res = {}
        await Applyevent.find(req, res)
            .then((response)=> {
                expect(typeof response).toBe('object');
            })
    });
});

describe('Apply Post', () => {
    it('Should be able create a users', () => {
        const ApplyEvent = {
            'number': '123123',
            'cv': 'asd',
            'user':"5f14467fba23fb21e437c641",
            'eventpost':"5f1469d9349bfb317c25f961"


        };
        // const hero_1 = await Heroes.create(hero);
        return Applyevent.create(ApplyEvent)
            .then((post_1) => {
                expect(post_1.number).toEqual('123123');
            });
    });


});