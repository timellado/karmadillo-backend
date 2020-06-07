"use strict";

const CompetitionModel = require('../models/competition');
const UserModel = require('../models/user');

// need params:{userId:CurrentUserId, participants:participantsId}
const create = async (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    try {
        // Look for the owner
        const owner = await UserModel.findById(req.userId);
        // Look for the participants
        let participants  = JSON.parse(req.body.participants);

        let competition = new CompetitionModel({
            name: req.body.name,
            tag: req.body.tag,
            owner: owner
        });
        for (let index = 0; index < participants.length; index++) {
            const participantId = participants[index];
            const participant = await UserModel.findById(participantId);
            competition.participants.push(participant)
        }
        // Save the competition
        await competition.save();

        return res.status(201).json(competition)
    } catch (err) {
        return res.status(500).json({
            error: 'Internal server error',
            message: err.message
        });
    }
};

const list  = async (req, res) => {
    try {
      let competitions = await CompetitionModel.find({}).exec();
  
      return res.status(200).json(competitions);
    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
  };


module.exports = {
    create,
    list
};