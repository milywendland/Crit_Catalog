const { Router } = require('express')
const controllers = require('../controllers/GamesController')
const router = Router()

router.get('/', (req, res) => res.send('this is root'))

router.get('/games', controllers.getAllGames)

router.post('/games', controllers.addGame)

router.get('/games/details/:id', controllers.getGame)

router.delete('/games/:id', controllers.deleteGame)

// router.post('/list', controllers.createList)

// router.put('list/update/:name', controllers.updateList)

// router.delete('/list/:name', controllers.deleteList)

module.exports = router
