"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const ActivityController = require('../controllers/activity');

router.get('/', ActivityController.list); // List all activities
router.post('/', middlewares.checkAuthentication, ActivityController.create); // Create a new activity
router.get('/:id', ActivityController.read); // Read a activity by Id
router.put('/:id', middlewares.checkAuthentication, ActivityController.update); // Update a act by Id
router.delete('/:id', middlewares.checkAuthentication, ActivityController.remove); // Delete a activity by Id



module.exports = router;