"use strict";

const express = require('express');
const router = express.Router();

const middlewares = require('../middlewares');
const UserController = require('../controllers/user');


router.get('/', UserController.list); // List all users
// router.post('/', middlewares.checkAuthentication, UserController.create); // Create a new user
// router.get('/:id', MovieController.read); // Read a movie by Id
// router.put('/:id', middlewares.checkAuthentication, MovieController.update); // Update a movie by Id
// router.delete('/:id', middlewares.checkAuthentication, MovieController.remove); // Delete a movie by Id


module.exports = router;