"use strict";

const mongoose = require('mongoose');


// Define the movie schema
const PostSchema  = new mongoose.Schema({
    postPic: String,
    description: {
        type: String,
        required: true
    },
    comments: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }
    ],
    activity: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Activity',
        reqired: true
    }
});

PostSchema.set('versionKey', false);
PostSchema.set('timestamps', true);


// Export the Movie model
module.exports = mongoose.model('Post', PostSchema);