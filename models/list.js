const mongoose = require('mongoose')
const Schema = mongoose.Schema

const List = new Schema(
  {
    name: { type: String, required: true },
    game: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
  },
  { timestamps: true }
)

module.exports = List
