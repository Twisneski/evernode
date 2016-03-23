'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Categories',
  mongoose.Schema({
    name: String,
    description: String
  })
);



//type mongoose.Schema.Types.ObjectId will bring in object
//ref: Notes is in mongo - with ref it has to be capitalized plural version

