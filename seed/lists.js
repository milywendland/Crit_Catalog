const db = require('../db')
const { List } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const lists = [
    {
      name: 'My Favorites',
      games: [
        '624efaff07eedbd6d84dfcd3',
        '6624efaff07eedbd6d84dfce2',
        '624efaff07eedbd6d84dfcec'
      ]
    },

    {
      name: 'Not My Favorites',
      games: [
        '624efaff07eedbd6d84dfd02',
        '624efaff07eedbd6d84dfce1',
        '624efaff07eedbd6d84dfcd8'
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
