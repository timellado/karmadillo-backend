"use strict";

const express = require('express');
const router = express.Router();

const middlewares = require('../middlewares');
const CompetitionController = require('../controllers/competition');


router.get('/', CompetitionController.list); // List all competitions
router.post('/', middlewares.checkAuthentication, CompetitionController.create); // Create a new movie
// router.get('/:id', CompetitionController.read); // Read a movie by Id
// router.put('/:id', middlewares.checkAuthentication, CompetitionController.update); // Update a movie by Id
// router.delete('/:id', middlewares.checkAuthentication, CompetitionController.remove); // Delete a movie by Id


module.exports = router;