"use strict";

const ActivityModel = require('../models/activity');


const create = async (req, res) => {
  if (Object.keys(req.body).length === 0) return res.status(400).json({
      error: 'Bad Request',
      message: 'The request body is empty'
  });

  try {
    let activity = await ActivityModel.create(req.body);

    return res.status(201).json(activity)
  } catch(err) {
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
};

const read = async (req, res) => {
  try {
    let activity = await ActivityModel.findById(req.params.id).exec();

    if (!activity) return res.status(404).json({
      error: 'Not Found',
      message: `activity not found`
    });

    return res.status(200).json(activity)
  } catch(err) {
    return res.status(500).json({
      error: 'Internal Server Error',
      message: err.message
    });
  }
};

const update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }

    try {
      let activity = await ActivityModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      }).exec();

      return res.status(200).json(activity);
    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
};

const remove = async (req, res) => {
  try {
    await ActivityModel.findByIdAndRemove(req.params.id).exec();

    return res.status(200).json({message: `activity with id${req.params.id} was deleted`});
  } catch(err) {
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
};

const list  = async (req, res) => {
  try {
    let activities = await ActivityModel.find({}).exec();

    return res.status(200).json(activities);
  } catch(err) {
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
};


module.exports = {
    create,
    read,
    update,
    remove,
    list
};
