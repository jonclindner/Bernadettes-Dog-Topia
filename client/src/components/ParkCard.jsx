const ParkCard = (props) => {
  return (
    <div className="card game-card" onClick={props.onClick}>
      <h3>{props.name}</h3>
      <p>{props.location}</p>
      <div className="img-wrapper">
        <img src={props.image} alt="Park" />
      </div>
      <div className="info-wrapper flex-col"></div>
    </div>
  )
}

export default ParkCard
