const Sequelize = require('sequelize');

const db = require('../config/database');

const Review = db.define('review', {
  nombre: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  mensaje: {
    type: Sequelize.STRING
  }
});

module.exports = Review;
