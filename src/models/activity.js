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
});

ActivitySchema.set('versionKey', false);
ActivitySchema.set('timestamps', true);


// Export the Activity model
module.exports = mongoose.model('Activity', ActivitySchema);

var Activity = mongoose.model('Activity', ActivitySchema);

Activity.create({ name: 'test name', category: 'test cat'  }, function (err, small) {
    if (err) return handleError(err);
    // saved!
  });