'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const Note = mongoose.model('Notes', mongoose.Schema({
  title: String,
  text: String
}));

app.set('view engine', 'jade');
//middleware come before routes
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.get('/notes/new', (req, res) => {
  res.render('new-note');
});
//serves form
app.post('/notes', (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) throw err;
    console.log(note)
    res.redirect('/');
  });
});

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});
//start express then add mongoose. wrap mongoose around listen function





