"use strict";

const mongoose = require('mongoose');


// Define the activity schema
const ActivitySchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
    post: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post',
        required: false
    },
    competition: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Competition',
        reqired: false
    },
    tag: [String],
});

ActivitySchema.set('versionKey', false);
ActivitySchema.set('timestamps', true);


// Export the Activity model
module.exports = mongoose.model('Activity', ActivitySchema);
