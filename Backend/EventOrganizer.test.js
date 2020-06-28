const EventOrganizer = require('../Models/EventOrganizer');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test_ArtistHub';
const userid='userid'
let updateId=''

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

describe("GET / - EventOrganizer Details", () => {
    it("Users get function test", async () => {
        const req = {
            limit: 10, offset:0
        }
        const res = {}
        await EventOrganizer.find(req, res)
            .then((response)=> {
                expect(typeof response).toBe('object');
            })
    });
});

describe('EventOrganizer Add', () => {
    it('Should be able create a EventOrganizer', () => {
        const Organizer = {
            'name': 'asd',
            'contact': '123123',
            'Address': 'asd',
            'email': 'asd@asd.com',
            'userid':userid

        };
        // const hero_1 = await Heroes.create(hero);
        return EventOrganizer.create(Organizer)
            .then((post_1) => {
                updateId=post_1._id
                expect(post_1.name).toEqual('asd');
            });
    });
    it('to test the update', async () => {
        return EventOrganizer.findByIdAndUpdate({_id :Object(updateId)}, {$set : {name:'qwe'}})
            .then((post_1)=>{
                expect(post_1.$set.name).toEqual('qwe')
            })

    });
    it('to test the delete batch is working or not', async () => {
        const res = await EventOrganizer.findByIdAndDelete({_id: Object(updateId)});
        expect(res._id.toString()).toBe(updateId.toString());
    });

});