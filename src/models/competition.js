"use strict";

const mongoose = require('mongoose');


// Define the movie schema
const CompetitionSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: String,
    tag: {
        type: String,
        required: true
    },
    start_time: Date,
    end_time: Date,
    goal: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    participants: [{
        type: Schema.Types.ObjectId,
        ref: "user"
    }]
});

CompetitionSchema.set('versionKey', false);
CompetitionSchema.set('timestamps', true);


// Export the Movie model
module.exports = mongoose.model('Competition', CompetitionSchema);