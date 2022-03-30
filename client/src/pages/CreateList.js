import { useState } from 'react'

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

  // const handleOnSubmit = (e) => {
  //   e.preventDefafult()
  //   document.body = `${gameName}`
  // }

  return (
    <div>
      <h2>Create List</h2>
      <form onSubmit="">
        <label>List Name:</label>
        <input onChange={handleListNameChange} type="text" name="name" />
        <label>Search Games:</label>
        <input onChange={handleSearchChange} type="search" />
        <button type="submit">Make List</button>
      </form>
    </div>
  )
}

export default CreateList
