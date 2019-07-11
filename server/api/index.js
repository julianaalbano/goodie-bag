'use strict';
const Candies = require('../db/models/Candy');
const router = require('express').Router();

router.get('/candies', async (req, res, next) => {
  try {
    const allCandies = await Candies.findAll();
    res.send(allCandies);
  } catch (err) {
    next(err);
  }
});

router.get('/candies/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const retrievedCandy = await Candies.findById(id);
    res.send(retrievedCandy);
  } catch (err) {
    next(err);
  }
});

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
