import axios from 'axios'

const CreateList = () => {
  return (
    <div>
      <h2>Create List</h2>
      <form>
        <label>List Name:</label>
        <input onChange="" type="text" name="name" />
        <label>Search Games:</label>
        <input type="search" />
        <button>Make List</button>
      </form>
    </div>
  )
}

export default CreateList
