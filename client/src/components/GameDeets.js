const GameDeets = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name}></img>
      <h4>{props.type}</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default GameDeets
