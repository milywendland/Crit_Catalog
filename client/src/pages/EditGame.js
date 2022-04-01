import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const EditGame = () => {
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const { id } = useParams()

  useEffect(() => {
    document.title = 'Edit Game'
  })

  const handleImageChange = (e) => {
    e.preventDefafult()
    setImage(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    e.preventDefafult()
    setDescription(e.target.value)
  }

  const editGame = async () => {
    await axios.put(`http://localhost:3001/api/games/details/${id}/edit`)
  }

  return (
    <form>
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
      <button onClick={editGame()}>Edit Game</button>
    </form>
  )
}

export default EditGame
