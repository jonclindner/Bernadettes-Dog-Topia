const ParkCard = (props) => {
  return (
    <div className="card game-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="Park" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>{props.material}</p>
      </div>
    </div>
  )
}

export default ParkCard
