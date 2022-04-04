const GameListCard = (props) => {
  return (
    <div className="list-card" key={props._id}>
      <h3>{props.name}:</h3>
      {props.games.map((game) => (
        <li ley={game._id}>
          {game.name} <img src={game.image} alt={game.name} />
        </li>
      ))}
    </div>
  )
}

export default GameListCard
