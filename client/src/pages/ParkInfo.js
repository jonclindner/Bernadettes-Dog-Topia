// import axios from 'axios'
// import Viewparks from './ViewParks'

// const ParkInfo = () => {
//   useEffect(() => {
//     // let isCancelled = false
//     const getPark = async () => {
//       const response = await axios.get(
//         `http://localhost:3001/api/parks/${parkId}`
//       )
//       console.log(response.data)
//       //   if (!isCancelled) {
//       //   setParks(response.data.parks)
//       //   }
//     }
//     getPark()
//   })

//   return (
//     <div>
//       <h1>Park Info page </h1>
//     </div>
//   )
// }
// export default ParkInfo

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Update from './Update'
import UpdatePark from '../components/UpdatePark'

const ParkDetails = () => {
  const [parkDetails, setParkDetails] = useState({})

  let { parkId } = useParams()

  let isCancelled = false

  const getParkDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/parks/${parkId}`
    )
    console.log(response)
    if (!isCancelled) {
      setParkDetails(response.data.park)
      console.log(response.data.park)
    }
  }
  const getParkReviews = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/reviews/${parkId}`
    )
  }
  useEffect(() => {
    getParkDetails()
    return () => {
      isCancelled = true
    }
  }, [parkId])

  useEffect(() => {
    getParkReviews()
    return () => {
      isCancelled = true
    }
  }, [parkId])

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
      </div>
    </div>
  )
}

export default ParkDetails
