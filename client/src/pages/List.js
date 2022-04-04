import GameListCard from '../components/GameListCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

const List = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get(`http://localhost:3001/api/games/lists`)
      setLists(response.data.list)
    }
    getList()
  }, [])

  return (
    <div>
      <h2>Lists</h2>
      <div className="list-wrapper">
        {lists.map((list) => (
          <div key={list._id}>
            <GameListCard name={list.name} games={list.games} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
