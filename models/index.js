const mongoose = require('mongoose')
const GameSchema = require('./game')
const ListSchema = require('./list')

const Game = mongoose.model('games', GameSchema)
const List = mongoose.model('lists', ListSchema)

module.exports = {
  Game,
  List
}
