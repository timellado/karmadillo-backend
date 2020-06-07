"use strict";

const express = require('express');
const router = express.Router();

const middlewares = require('../middlewares');
const PostController = require('../controllers/post');


router.get('/', PostController.list); // List all posts
router.post('/', middlewares.checkAuthentication, PostController.create); // Create a new post
router.get('/:id', PostController.read); // Read a post by Id
router.put('/:id', middlewares.checkAuthentication, PostController.update); // Update a post by Id
router.delete('/:id', middlewares.checkAuthentication, PostController.remove); // Delete a post by Id


module.exports = router;