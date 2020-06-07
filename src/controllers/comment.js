"use strict";

const CommentModel = require('../models/comment');
const UserModel = require('../models/user');


const create = async (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    try {
   req.userId
      // Look for the user
      const user = await UserModel.findById(req.userId);
     
      let comment = await CommentModel.create(req.body);
      comment.user = user;
      await comment.save()

      return res.status(201).json(comment)

    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
};

const read = async (req, res) => {
  try {
    let comment = await CommentModel.findById(req.params.id).exec();

    if (!comment) return res.status(404).json({
      error: 'Not Found',
      message: `comment not found`
    });

    return res.status(200).json(comment)
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
      let comment = await CommentModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      }).exec();

      return res.status(200).json(comment);
    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
};

const remove = async (req, res) => {
  try {
    await CommentModel.findByIdAndRemove(req.params.id).exec();

    return res.status(200).json({message: `comment with id${req.params.id} was deleted`});
  } catch(err) {
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
};

const list  = async (req, res) => {
  try {
    let comments = await CommentModel.find({}).exec();

    return res.status(200).json(comments);
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