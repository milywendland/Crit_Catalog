const mongoose = require('mongoose')
const Schema = mongoose.Schema

const List = new Schema(
    {
        name: { type: String, required: true },
        game: {type: Array, required: true}, 
    },
    { timestamps: true },
)

module.exports = mongoose.model('list', List)