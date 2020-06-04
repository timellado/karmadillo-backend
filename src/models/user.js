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
    birthDate: {
        type: Date,
        required: true
    },
    profilePic: Image,
    verified: {
        type: Boolean,
        default: false
    },
    premium: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        default: false
    },
});

UserSchema.set('versionKey', false);


// Export the Movie model
module.exports = mongoose.model('User', UserSchema);