"use strict";

const express = require('express');
const router = express.Router();

const middlewares = require('../middlewares');
const CommentController = require('../controllers/comment');

router.get('/', CommentController.list); // List all activities
router.post('/', middlewares.checkAuthentication, CommentController.create); // Create a new comment
router.get('/:id', CommentController.read); // Read a comment by Id
router.put('/:id', middlewares.checkAuthentication, CommentController.update); // Update a act by Id
router.delete('/:id', middlewares.checkAuthentication, CommentController.remove); // Delete a comment by Id



module.exports = router;
