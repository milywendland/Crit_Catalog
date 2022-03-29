import GameCard from '../components/GameCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Games = () => {
  const [games, setGames] = useState([])
  useEffect(() => {
    document.title = 'Crit Catalog'
  })
  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get('http://localhost:3001/api/games')
      setGames(response.data.games)
    }
    getGames()
  }, [])

  let navigate = useNavigate()

  const showGame = (gameId) => {
    navigate(`/game/details/${gameId}`)
  }

  return (
    <div>
      <h2>All Games</h2>
      <section className="container">
        <div className="games-wrapper">
          {games.map((game) => (
            <div key={game._id}>
              <GameCard
                name={game.name}
                image={game.image}
                description={game.description}
                onClick={() => showGame(game._id)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default Games
