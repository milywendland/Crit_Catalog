const { Router } = require('express')
const controllers = require('../controllers/GamesController')
const router = Router()

router.get('/', (req, res) => res.send('this is root'))

router.get('/games', controllers.getGames)

router.get('/games/:id', controllers.getGame)

module.exports = router
