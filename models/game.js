const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Game = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Game
