import { useState, useEffect } from 'react'

const CreateList = () => {
  const [listName, setListName] = useState('')
  const [gameName, setGameName] = useState('')

  const handleListNameChange = (e) => {
    e.preventDefault()
    setListName(e.target.value)
  }

  const handleSearchChange = (e) => {
    e.preventDefault()
    setGameName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('clicky!')
  }

  return (
    <div>
      <h2>Make a List</h2>
      <form className="listform">
        <label>List Name:</label>
        <input onChange={handleListNameChange} type="text" name="name" />
        <label>Search Games:</label>
        <input onChange={handleSearchChange} type="search" />
        <button type="submit" onSubmit={handleSubmit}>
          Make List
        </button>
      </form>
      <div className="lists">
        <div className="list-card">
          <h3>{listName}</h3>
          <p>{gameName}</p>
        </div>
      </div>
    </div>
  )
}

export default CreateList
