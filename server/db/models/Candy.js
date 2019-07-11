const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candies', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://media.istockphoto.com/photos/mixed-colorful-fruit-bonbon-picture-id153502589?k=6&m=153502589&s=612x612&w=0&h=KqT6byV9WbXQRQWFZUkqur35_UMYZ9ub8RIPhUq-WBw=',
  },
});
