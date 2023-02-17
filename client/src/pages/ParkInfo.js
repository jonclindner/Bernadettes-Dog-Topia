import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const ParkDetails = () => {
  const [parkDetails, setParkDetails] = useState({})

<<<<<<< HEAD
  const [parkReviews, setParkReviews] = useState([])

  let { parkId } = useParams()

  // let isCancelled = false
=======
  const [parkReviews, setParkReviews] = useState({})

  let { parkId } = useParams()

  let isCancelled = false
>>>>>>> 4f148eff872c89a968911c97a1913d4a7cad1cee

  const getParkDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/parks/${parkId}`
    )
    console.log(response)
    // if (!isCancelled) {
    setParkDetails(response.data.park)
    console.log(response.data.park)
    // }
  }
  const getParkReviews = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/reviews/${parkId}`
    )
    console.log(response.data.reviews)
    // if (!isCancelled) {
    setParkReviews(response.data.reviews)
    // }
  }
  const getParkReviews = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/reviews/${parkId}`
    )
    console.log(...response.data.reviews)
    if (!isCancelled) {
      setParkReviews(response.data.reviews)
    }
  }
  useEffect(() => {
    getParkDetails()
    getParkReviews()
    // return () => {
    //   isCancelled = true
    // }
  }, [])

  useEffect(() => {
    getParkReviews()
    return () => {
      isCancelled = true
    }
  }, [parkId])
  console.log(parkReviews[0].ugaser)
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
        {/* <UpdatePark /> */}
        <Link to={`/parks/update/${parkDetails._id}`} key={parkDetails._id}>
          {/* <button>Leave a Review</button> */}
          <button>Update Park Information</button>
        </Link>
        <Link to={`/parks/delete/${parkDetails._id}`} key={parkDetails._id}>
          {/* <button>Leave a Review</button> */}
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
