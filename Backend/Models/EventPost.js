var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventPostSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    JobType: {
        type: String,
        required: false
    },
    Applicant: {
        type: Number,
        required: false
    },
    Deadline: {
        type: String,
        required: false
    },
    Salary: {
        type: String,
        required: false
    },
    Description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        default: ''
    },
    cv : {
        type: String,
        default: ''
    },
    userid: {
        type: String,
    
    },
 
  
},
 
    {
        timestamps: true
    });

var EventPost = mongoose.model('EventPost', EventPostSchema);
module.exports = EventPost;