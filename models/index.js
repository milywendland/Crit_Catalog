const mongoose = require('mongoose')
const GameSchema = require('./game')
const ListSchema = required('./list')

const Game = mongoose.model('game', GameSchema)
const List = mongoose.model('list', ListSchema)

module.exports = {
  Game,
  List
}
