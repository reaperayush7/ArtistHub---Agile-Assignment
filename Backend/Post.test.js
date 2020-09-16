const Post = require('../Models/Post');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test_ArtistHub';
let updateId=''
const userid='userid'

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

describe("GET / - Posts ", () => {
    it("Users get function test", async () => {
        const req = {
            limit: 10, offset:0
        }
        const res = {}
        await Post.find(req, res)
            .then((response)=> {
                expect(typeof response).toBe('object');
            })
    });
});

describe('Post Add', () => {
    it('Should be able create a post', () => {
        const post = {
            'description': 'asd',
            'userid':userid
        };
        return Post.create(post)
            .then((post_1) => {
                updateId=post_1._id
                expect(post_1.description).toEqual('asd');
            });
    });
    it('to test the update', async () => {
        return Post.findByIdAndUpdate({_id :Object(updateId)}, {$set : {description:'qwe'}})
            .then((post_1)=>{
                expect(post_1.$set.description).toEqual('qwe')
            })

    });
    it('to test the delete batch is working or not', async () => {
        const res = await Post.findByIdAndDelete({_id: Object(updateId)});
        expect(res._id.toString()).toBe(updateId.toString());
    });

});