const mongoose = require('mongoose')
const Schema = mongoose.Schema

const List = new Schema(
  {
    name: { type: String, required: true },
    games: [{ type: Schema.Types.ObjectId, ref: 'games' }]
  },
  { timestamps: true }
)

module.exports = List
