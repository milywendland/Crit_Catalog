const db = require('../db')
const { List } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const lists = [
    {
      name: 'My Favorites',
      games: [
        '624efaff07eedbd6d84dfcd3',
        '624efaff07eedbd6d84dfcdf',
        '624efaff07eedbd6d84dfce9'
      ]
    },

    {
      name: 'Not My Favorites',
      games: [
        '624efaff07eedbd6d84dfcf2',
        '624efaff07eedbd6d84dfcf8',
        '624efaff07eedbd6d84dfcfa'
      ]
    }
  ]

  await List.insertMany(lists)
  console.log('Created List!')
}

const run = async () => {
  await main()
  db.close()
}

run()
