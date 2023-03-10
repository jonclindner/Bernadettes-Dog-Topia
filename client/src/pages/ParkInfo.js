import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const ParkDetails = () => {
  const [parkDetails, setParkDetails] = useState({})

  const [parkReviews, setParkReviews] = useState([])

  let { parkId } = useParams()

  const getParkDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/parks/${parkId}`
    )

    setParkDetails(response.data.park)
  }
  const getParkReviews = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/reviews/${parkId}`
    )

    setParkReviews(response.data.reviews)
  }

  useEffect(() => {
    getParkDetails()
    getParkReviews()
  }, [])

  return (
    <div className="game-content">
      <div>
        <h1>{parkDetails.name}</h1>
        <h2>Located in {parkDetails.location}</h2>
        <h3>The ground surface is mainly {parkDetails.material}</h3>
        <p>{parkDetails.description}</p>
        <img
          style={{ display: 'block', maxWidth: '100%' }}
          src={parkDetails.image}
          alt="Park"
        />

        <Link to={`/parks/update/${parkDetails._id}`} key={parkDetails._id}>
          <button>Update Park Information</button>
        </Link>
        <Link to={`/parks/delete/${parkDetails._id}`}>
          <button>Delete Park</button>
        </Link>
      </div>
      {parkReviews?.map((review) => (
        <div key={review._id}>
          <h1>Review By: {review.user}</h1>
          <h2>Rating: {review.rating}/5</h2>
          <h2>Comment: {review.comment}</h2>
          <div className="container-grid"></div>
        </div>
      ))}
    </div>
  )
}

export default ParkDetails
