const { Game } = require('../models/index')

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find()
    return res.status(200).json({ games })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllGames
}
