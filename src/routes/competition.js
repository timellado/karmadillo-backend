"use strict";

const express = require('express');
const router = express.Router();

const middlewares = require('../middlewares');
const CompetitionController = require('../controllers/competition');


router.get('/', CompetitionController.list); // List all competitions
router.post('/', middlewares.checkAuthentication, CompetitionController.create); // Create a new competition
router.get('/:id', CompetitionController.read); // Read a competition by Id
router.put('/:id', middlewares.checkAuthentication, CompetitionController.update); // Update a competition by Id
router.delete('/:id', middlewares.checkAuthentication, CompetitionController.remove); // Delete a competition by Id


module.exports = router;