var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApplyeventSchema = new Schema({

    number: {
        type: String,
        required: false
    },
    cv: {
        type: String,
        default: ''
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    eventpost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'eventpost',
        required: true
    },
},
 
    {
        timestamps: true
    });

var Applyevent = mongoose.model('Applyevent', ApplyeventSchema);
module.exports = Applyevent;