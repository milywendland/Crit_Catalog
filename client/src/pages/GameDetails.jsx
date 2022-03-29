import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GameCard from '../components/GameCard'

const GameDetails = (props) => {
  const [game, setGame] = useState('')

  useEffect(() => {
    const getGame = async () => {
      const response = await axios.get(`http://localhost:3001/api/games/${game._id}`)
      setGame(response.data.games)
    }
    getGame()
  }, [])


return(
  <div className='game-desc'>
    <section className='image'>
      <div>
        <img
        className='descImg'
        src={props.image}
        alt={props.name}
        />
      </div>
    </section>
    <section className='gamedetails'>
    <div>
      <h2>{props.name}</h2>
      <p>
        {props.description}
      </p>
    </div>
    </section>
    <div>
      <button>Add to List</button>
    </div>
  </div>
)

}

export default GameDetails