'use strict';

const db = require('./database');
const Candies = require('./models/Candy');

//No associations

module.exports = {
  Candies,
  db,
};
