import ListCard from '../components/ListCard'

const List = (game) => {
  return (
    <div>
      <h3>My Favorite Games:</h3>
      <ListCard name={game.name} image={game.image} />
    </div>
  )
}

export default List
