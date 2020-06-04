"use strict";

const CompetitionModel = require('../models/competition');

// need params:{userId:CurrentUserId, participants:participantsId}
const create = async (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    try {
        // Look for the owner
        const { userId } = req.params;
        const owner = user.findById(userId);
        // Look for the participants
        const { participants } = req.params;

        let competition = await CompetitionModel.create(req.body);
        competition.owner = owner;

        for (let index = 0; index < participants.length; index++) {
            const participantId = participants[index];
            const participant = user.findById(participantId);
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


module.exports = {
    create
};