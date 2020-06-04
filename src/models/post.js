"use strict";

const mongoose = require('mongoose');


// Define the movie schema
const PostSchema  = new mongoose.Schema({
    postPic: Image,
    description: {
        type: String,
        required: true
    }
});

PostSchema.set('versionKey', false);
PostSchema.set('timestamps', true);


// Export the Movie model
module.exports = mongoose.model('Post', PostSchema);