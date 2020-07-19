"use strict";

const mongoose = require('mongoose');


// Define the comment schema
const CommentSchema  = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post',
    },
    likes: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    }
});

CommentSchema.set('versionKey', false);
CommentSchema.set('timestamps', true);


// Export the Comment model
module.exports = mongoose.model('Comment', CommentSchema);