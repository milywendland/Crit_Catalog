const { Game } = require('../models/game.js')

const createGame = async (req, res) => {
  try {
    const game = await new Game(req.body)
    await game.save()
    return res.status.json({
      game
    })
  } catch (error) {
    return res.status.json({ error: error.message })
  }
}

const getGames = async (req, res) => {
  try {
    const games = await Game.find()
    return res.status(200).json({ games })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getGames,
  createGame
}
