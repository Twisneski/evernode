'use strict';

const Note = require('../models/note');

module.exports.edit = (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('new-note', {note: note});
  });
};

module.exports.update = (req, res) => {
  Note.findByIdAndUpdate(req.params.id,
    req.body, (err, note) => {
      if (err) throw err;

      res.redirect(`/notes/${note._id}`);
    }
  );
};
//create action in controller for edit and update

// module.exports.index = (req, res) => {
//   res.send('Index');
// };
//creates index action
module.exports.index = (req, res) => {
  Note.find({}, (err, notes) => {
    if (err) throw err;

    res.render('notes-index', {notes: notes});
  });
//query database with .find - now jade has access to notes object.

module.exports.newNote = (req, res) => {
  res.render('new-note');
};

module.exports.show = (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('show-note', {note: note});
  });
};

module.exports.create = (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) throw err;

    res.redirect(`/notes/${note._id}`);
  });
};

module.exports.destroy = (req, res) => {
  Note.findByIdAndRemove(req.params.id, (err) => {
    if (err) throw err;

    res.send('destroyed!')
  });
};
