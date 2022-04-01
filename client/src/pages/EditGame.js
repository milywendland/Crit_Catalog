import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const EditGame = () => {
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [game, setGame] = useState('')

  const { id } = useParams()

  useEffect(() => {
    document.title = 'Edit Game'
  })

  useEffect(() => {
    const getGame = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/games/details/${id}`
      )
      setGame(response.data.game)
    }
    getGame()
  }, [])

  const handleImageChange = (e) => {
    e.preventDefault()
    setImage(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    e.preventDefault()
    setDescription(e.target.value)
  }

  let navigate = useNavigate()

  const editGame = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/games/details/${id}/edit`)
  }

  return (
    <form
      onSubmit={() => {
        editGame()
      }}
    >
      <label>
        Image Url:
        <input onChange={handleImageChange} type="text" name="image" />
      </label>
      <label>
        Description:
        <input
          onChange={handleDescriptionChange}
          type="text"
          name="description"
        />
      </label>
      <button type="submit" onClick={() => navigate(`/games/details/${id}`)}>
        Edit Game
      </button>
    </form>
  )
}

export default EditGame
