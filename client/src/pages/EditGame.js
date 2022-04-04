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

  let navigate = useNavigate()

  const handleImageChange = (e) => {
    e.preventDefault()
    setImage(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    e.preventDefault()
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (description !== '' && image !== '') {
      axios
        .put(`http://localhost:3001/api/games/details/${id}/edit`)
        .catch((err) => console.log(err))
      navigate(`/games/details/${id}`)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button>Edit Game</button>
      </form>
    </div>
  )
}

export default EditGame
