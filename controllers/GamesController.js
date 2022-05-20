const res = require('express/lib/response')
const { Game, List } = require('../models/index')

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

const editGame = async (req, res) => {
  const { id } = req.params
  Game.findByIdAndUpdate(id, req.body, { new: true }, (error, game) => {
    if (error) {
      res.status(500).send(error)
    } else {
      return res.status(200).json({ game })
    }
  })
}

const addToList = async (req, res) => {
  const { id } = req.params
  List.findByIdAndUpdate(id, req.body, { new: true }, (error, list) => {
    if (error) {
      res.status(500).send(error)
      return
    }
    if (!list) {
      res.status(500).send('oops! no list found.')
      return
    }
    return res.status(200).json({ list })
  })
}

const getList = async (req, res) => {
  try {
    const list = await List.find().populate('games')
    if (list) {
      return res.status(200).json({ list })
    }
    return res.status(404).send('List does not exist')
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

module.exports = {
  getAllGames,
  addGame,
  getGame,
  editGame,
  addToList,
  getList,
  deleteGame
}
