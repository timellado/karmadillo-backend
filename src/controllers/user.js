"use strict";

const UserModel = require('../models/user');


const create = async (req, res) => {
  if (Object.keys(req.body).length === 0) return res.status(400).json({
      error: 'Bad Request',
      message: 'The request body is empty'
  });

  try {
    let user = await UserModel.create(req.body);

    return res.status(201).json(user)
  } catch(err) {
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
};

const read = async (req, res) => {
  try {
    let user = await UserModel.findById(req.params.id).exec();

    if (!user) return res.status(404).json({
      error: 'Not Found',
      message: `user not found`
    });

    return res.status(200).json(user)
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
      let user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      }).exec();

      return res.status(200).json(user);
    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
};

const remove = async (req, res) => {
  try {
    await UserModel.findByIdAndRemove(req.params.id).exec();

    return res.status(200).json({message: `user with id${req.params.id} was deleted`});
  } catch(err) {
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
};

const list  = async (req, res) => {
  try {
    let activities = await UserModel.find({}).exec();

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
