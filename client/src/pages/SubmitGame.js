import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SubmitGame = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [game, setGame] = useState('')

  const { gameId } = useParams()
  useEffect(() => {
    document.title = 'Submit a Game'
  })
  useEffect(() => {
    setGame(gameId)
  }, [])

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleImageChange = (e) => {
    e.preventDefafult()
    setImage(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    e.preventDefafult()
    setDescription(e.target.value)
  }

  const handleTypeChange = (e) => {
    if (e.target.value == 'video game' || e.target.value == 'tabletop') {
      e.preventDefafult()
      setType(e.target.value)
    }
  }

  let navigate = useNavigate()

  const handleOnSubmit = async (e) => {
    if (name !== '' && type !== '' && (description !== '') & (image !== '')) {
      const packagedPayLoad = {
        name: name,
        type: type,
        image: image,
        description: description
      }
      e.preventDefafult()
      axios
        .post(`http://localhost:3001/api/games/${game}`, packagedPayLoad)
        .catch((err) => console.log(err))
      navigate(`/games`)
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Name:
        <input onChange={handleNameChange} type="text" name="name" />
      </label>
      <label>
        Type:
        <input onChange={handleTypeChange} type="text" name="type" />
      </label>
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
      <button type="submit">Add Game</button>
    </form>
  )
}

export default SubmitGame
