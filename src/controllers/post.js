"use strict";

const PostModel = require('../models/post');
const ActivityModel = require('../models/activity');


const create = async (req, res) => {

  if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    try {
      let post = await PostModel.create(req.body);

      await post.save();

      return res.status(201).json(post)
    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
};

const read = async (req, res) => {
  try {
    let post = await PostModel.findById(req.params.id).populate('comments').populate('activity').populate('likes').exec();

    if (!post) return res.status(404).json({
      error: 'Not Found',
      message: `post not found`
    });

    return res.status(200).json(post)
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
      let post = await PostModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      }).exec();

      return res.status(200).json(post);
    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
};

const remove = async (req, res) => {
  try {
    await PostModel.findByIdAndRemove(req.params.id).exec();

    return res.status(200).json({message: `post with id${req.params.id} was deleted`});
  } catch(err) {
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
};

const list  = async (req, res) => {
  try {
    let posts = await PostModel.find({}).populate('activity').populate('comments').populate('likes').exec();

    return res.status(200).json(posts);
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