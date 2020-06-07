"use strict";

const UserModel = require('../models/user');


const list  = async (req, res) => {
    try {
      let users = await UserModel.find({}).exec();
  
      return res.status(200).json(users);
    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
  };


module.exports = {
    list
};