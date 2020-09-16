const users = require('../Models/users');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test_ArtistHub';
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

describe("GET / - User Details", () => {
    it("Users get function test", async () => {
        const req = {
            limit: 10, offset:0
        }
        const res = {}
        await users.find(req, res)
            .then((response)=> {
                expect(typeof response).toBe('object');
            })
    });
});

describe('User Add', () => {
    it('Should be able create a users', () => {
        const user = {
            'FirstName': 'asd',
            'LastName': 'asd',
            'contactnumber': '123123',
            'Address': 'asd',
            'email': 'asd@asd.com',
            'Country': 'asd ',
            'username': 'req',
            'password': 'asd',
        };
        // const hero_1 = await Heroes.create(hero);
        return users.create(user)
            .then((post_1) => {
                updateId=post_1._id
                expect(post_1.username).toEqual('req');
            });
    });
    it('to test the update', async () => {
        return users.findByIdAndUpdate({_id :Object(updateId)}, {$set : {FirstName:'qwe'}})
            .then((post_1)=>{
                expect(post_1.$set.FirstName).toEqual('qwe')
            })

    });
    it('to test the delete batch is working or not', async () => {
        const res = await users.findByIdAndDelete({_id: Object(updateId)});
        expect(res._id.toString()).toBe(updateId.toString());
    });

});