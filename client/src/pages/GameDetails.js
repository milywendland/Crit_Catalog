import axios from 'axios'
import { useState, useEffect } from 'react'
import GameDeets from '../components/GameDeets'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const GameDetails = () => {
  const { id } = useParams()
  const [game, setGame] = useState('')

  useEffect(() => {
    const getGame = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/games/details/${id}`
      )
      setGame(response.data.game)
    }
    getGame()
  }, [])

  let navigate = useNavigate()
  const addToList = () => {
    navigate(`/games/lists/:id`)
  }

  const deleteGame = async (e) => {
    await axios.delete(`http://localhost:3001/api/games/details/${id}`)
    navigate('/')
  }

  return (
    <div className="deets-wrapper">
      <div className="deets">
        <section>
          <div key={game._id}>
            <GameDeets
              name={game.name}
              image={game.image}
              type={game.type}
              description={game.description}
            />
            <button
              onClick={() => {
                deleteGame(game._id)
              }}
            >
              Delete Game
            </button>
          </div>
        </section>
        <div>
          <button onClick={() => addToList()}>Add to List</button>
        </div>
      </div>
    </div>
  )
}

export default GameDetails
