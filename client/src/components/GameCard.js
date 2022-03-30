const GameCard = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <button onSubmit={props.onSubmit}>+</button>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name}></img>
    </div>
  )
}

export default GameCard
