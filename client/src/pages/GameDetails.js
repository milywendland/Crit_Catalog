import axios from 'axios'
import { useState, useEffect } from 'react'
import GameDeets from '../components/GameDeets'

const GameDetails = () => {
  const [game, setGame] = useState('')

  useEffect(() => {
    const getGame = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/games/${game._id}`
      )
      setGame(response.data.game)
    }
    getGame()
  }, [])

  return (
    <div className="deets">
      <section>
        <div key={game._id}>
          <GameDeets
            name={game.name}
            image={game.image}
            type={game.type}
            description={game.description}
          />
        </div>
      </section>
      <div>
        <button>Add to List</button>
      </div>
    </div>
  )
}

export default GameDetails
