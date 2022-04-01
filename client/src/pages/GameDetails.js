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

  const deleteGame = async () => {
    await axios.delete(`http://localhost:3001/api/games/details/${id}`)
    navigate('/')
  }

  const addToList = async () => {
    await axios.post(`http://localhost:3001/api/games/lists`)
    navigate('/games/lists')
  }

  return (
    <div className="deets-wrapper">
      <div className="deets">
        <section className="detailsection">
          <div key={game._id}>
            <GameDeets
              name={game.name}
              image={game.image}
              type={game.type}
              description={game.description}
            />
          </div>
        </section>
        <div className="buttons">
          <button
            onClick={() => {
              deleteGame(game._id)
            }}
          >
            Delete Game
          </button>
          <button
            onClick={() => {
              navigate(`/games/details/${id}/edit`)
            }}
          >
            Edit Game
          </button>
          <button
            onClick={() => {
              addToList(game._id)
            }}
          >
            Add to List
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameDetails
