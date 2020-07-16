const mongoose = require('mongoose')

const Schema = mongoose.Schema

const winnerSchema = new Schema({
  name: {type: String, require: true}
})

const Winner = mongoose.model('Winner', winnerSchema);

module.exports = Winner;
