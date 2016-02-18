'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const note = require('./routes/note');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'jade');
//middleware comes before routes
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));
//looks for query parameter in a post

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.use(note);

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode server running on port: ${port}`);
  });
});
//start express then add mongoose. wrap mongoose around listen function





