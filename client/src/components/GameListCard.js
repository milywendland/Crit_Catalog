const GameListCard = (props) => {
  return (
    <div className="list-card">
      <h3>{props.name}:</h3>
      {props.games.map((game) => (
        <li>
          {game.name} <img src={game.image} alt={game.name} />
        </li>
      ))}
    </div>
  )
}

export default GameListCard
