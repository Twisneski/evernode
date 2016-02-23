'use strict';

const express = require('express');
const router = express.Router();

const Note = require('../models/note');
// const Category = require('../models/category');

const ctrl = require('../controllers/note');

router.param('id', (req, res, next, id) => {
  Note
    .findById(id)
    .populate('category')
    .exec((err, note) => {
      if (err) throw err;

      req.note = note;
      next();
    });
});


router
  .get('/notes', ctrl.index)
  .get('/notes/new', ctrl.new)
  .post('/notes', ctrl.create)
  .get('/notes/:id', ctrl.show)
  .get('/notes/:id/edit', ctrl.edit)
  .put('/notes/:id', ctrl.update)
  .delete('/notes/:id', ctrl.destroy);

module.exports = router;


//Builds a query then executes

//when it stop and starts and when you go to the note route because it is the very first request - need to substantiate the category in the model
