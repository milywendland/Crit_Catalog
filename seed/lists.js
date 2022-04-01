const db = require('../db')
const { List } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const lists = [
    {
      name: 'My Favorites',
      games: [
        '624728a20f0ba9e6a858b0f0',
        '624728a20f0ba9e6a858b0f4',
        '624728a20f0ba9e6a858b0f5'
      ]
    },

    {
      name: 'Not My Favorites',
      games: [
        '624728a20f0ba9e6a858b0f7',
        '624728a20f0ba9e6a858b0f8',
        '624728a20f0ba9e6a858b0f9'
      ]
    }
  ]

  await List.insertMany(lists)
  console.log('Created List!')
}

const run = async () => {
  await db.dropCollection('lists')
  await main()
  db.close()
}

run()
