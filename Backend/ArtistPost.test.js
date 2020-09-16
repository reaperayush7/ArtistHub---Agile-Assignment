const EventPost = require('../models/EventPost');
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
describe("GET / - batch Details", () => {
    it("Batch get function test", async () => {
        const req = {
            limit: 10, offset:0
        }
        const res = {}
        await EventPost.find(req, res)
            .then((response)=> {
                expect(typeof response).toBe('object');
            })
    });
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
                updateId=eventpost_1._id
                expect(eventpost_1.name).toEqual('asd');
            });
    });
    it('to test the update', async () => {
        return EventPost.findByIdAndUpdate({_id: Object(updateId)}, {$set: {JobType: 'Drummer'}})
            .then((post_1) => {
                expect(post_1.$set.JobType).toBe('Drummer')
            })
    });
    it('to test the delete Artistpost is working or not', async () => {
        const res = await EventPost.findByIdAndDelete({_id: Object(updateId)});
        expect(res._id.toString()).toBe(updateId.toString());
    });

});