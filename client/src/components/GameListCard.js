const GameListCard = (props) => {
  return (
    <div className="list-card">
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name}></img>
    </div>
  )
}

export default GameListCard
