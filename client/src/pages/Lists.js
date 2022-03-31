import ListCard from '../components/ListCard'

const Lists = () => {
  const list = [
    {
      name: '',
      games: '[ ]'
    }
  ]

  return (
    <div>
      <h2>Lists</h2>
      <ListCard name={list.name} games={list.games} />
    </div>
  )
}

export default Lists
