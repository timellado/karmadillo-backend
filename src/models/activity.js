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
    tag: [String]
});

ActivitySchema.set('versionKey', false);
ActivitySchema.set('timestamps', true);


// Export the Activity model
module.exports = mongoose.model('Activity', ActivitySchema);