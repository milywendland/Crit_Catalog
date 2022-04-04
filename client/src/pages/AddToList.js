import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AddToList = () => {
  const { id } = useParams()

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/games/lists/${id}/add`)
    navigate(`/games/lists`)
  }

  return (
    <div>
      <h2>Add To List</h2>
      <form onSubmit={handleSubmit}>
        <h3>Which List?</h3>
        <label>
          My Favorites:
          <input type="radio" />
        </label>
        <label>
          Not My Favorites:
          <input type="radio" />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddToList
