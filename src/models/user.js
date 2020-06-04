"use strict";

const mongoose = require('mongoose');


// Define the user schema
const UserSchema  = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    birthData: {
        type: Date,
        required: true
    },
    profilePic: {
        type: Image,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    },
    premium: {
        type: Boolean,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        required: true
    },
});

UserSchema.set('versionKey', false);


// Export the Movie model
module.exports = mongoose.model('User', UserSchema);