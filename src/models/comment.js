"use strict";

const mongoose = require('mongoose');


// Define the comment schema
const CommentSchema  = new mongoose.Schema({
    text: {
        type: String,
        required: false
    }
});

CommentSchema.set('versionKey', false);
CommentSchema.set('timestamps', true);


// Export the Comment model
module.exports = mongoose.model('Comment', CommentSchema);