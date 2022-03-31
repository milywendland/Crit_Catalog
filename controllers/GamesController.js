const { Game } = require('../models/index')

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find()
    return res.status(200).json({ games })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addGame = async (req, res) => {
  try {
    const game = await new Game(req.body)
    await game.save()
    return res.status(201).json({ game })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getGame = async (req, res) => {
  try {
    const { id } = req.params
    const game = await Game.findById(id)
    if (game) {
      return res.status(200).json({ game })
    }
    return res.status(404).send('Game does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteGame = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Game.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('game deleted')
    }
    throw new Error('game not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// const createList = async (req, res) =>{
//   try{
//   const list = await new List
// }
// }

const addToList = async (req, res) => {
  try {
    const { id } = req.params
    const added = await Game.findByIdAndUpdate(id)
    if (added) {
      return res.status(201).json({ game })
    }
    throw new Error('game not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const searchGames = async (req, res) => {
  try {
    let name = req.params.name
    const found = await Game.find(name)
    if (found) {
      return res.status(200).json({ game })
    }
    throw new Error('game not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllGames,
  addGame,
  getGame,
  deleteGame,
  // createList,
  addToList,
  searchGames
}
