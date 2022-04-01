import GameListCard from '../components/GameListCard'

const List = (game) => {
  return (
    <div>
      <h2>Lists</h2>
      <div>
        <div key={game._id}>
          <GameListCard name={game.name} image={game.image} />
        </div>
      </div>
    </div>
  )
}

export default List
