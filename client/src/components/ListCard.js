const ListCard = (props) => {
  return (
    <div className="list">
      <h3>{props.name}</h3>
      <li>{props.game}</li>
    </div>
  )
}

export default ListCard
