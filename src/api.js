"use strict";

const express    = require('express');
const bodyParser = require('body-parser');
const helmet     = require('helmet');

const middlewares = require('./middlewares');

const auth  = require('./routes/auth');
const movie  = require('./routes/movie');
const user = require('./routes/user');
const competition = require('./routes/competition');
// const comment = require('./routes/comment');
// const post = require('./routes/post');
// const activity = require('./routes/activity');


const api = express();

// Adding Basic Middlewares
api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(middlewares.allowCrossDomain);


// Basic route
api.get('/', (req, res) => {
    res.json({
        name: 'SEBA Master Movie Backend'
    });
});

// API routes
api.use('/auth'  , auth);
api.use('/movies'  , movie);
// api.use('/posts', post);
api.use('/users', user);
// api.use('/activities', activity);
// api.use('/comments', comment);
api.use('/competitions', competition);


module.exports = api;