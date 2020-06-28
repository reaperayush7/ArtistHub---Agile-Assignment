var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventOrganizerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Address:{ 
        type : String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    userid: {
        type: String,
    
    }, 
   
    });

var EventOrganizers = mongoose.model('EventOrganizer', EventOrganizerSchema);
module.exports = EventOrganizers;