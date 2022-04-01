const { Router } = require('express')
const controllers = require('../controllers/GamesController')
const router = Router()

router.get('/', (req, res) => res.send('this is root'))

router.get('/games', controllers.getAllGames)

router.post('/games', controllers.addGame)

router.get('/games/details/:id', controllers.getGame)

router.delete('/games/details/:id', controllers.deleteGame)

router.put('/games/details/:id/edit', controllers.editGame)

router.get('/games/lists', controllers.getList)

module.exports = router
