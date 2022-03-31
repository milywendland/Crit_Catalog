const ListCard = (props) => {
  return (
    <div className="list">
      <h4>{props.name}</h4>
      <img src={props.image} alt={props.name} />
    </div>
  )
}

export default ListCard
