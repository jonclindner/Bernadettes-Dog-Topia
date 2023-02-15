// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import ParkCard from '../components/ParkCard'

// const Home = () => {
//   return (
//     <div>
//       <h1>HOME PAGE</h1>
//     </div>
//   )
// }

// export default Home
import ParkCard from '../components/ParkCard'

const Home = () => {
  //   const [parks, setParks] = useState([])
  //   useEffect(() => {
  //     const getParks = async () => {
  //       const response = await axios.get(`http://localhost:3001/api/parks`)
  //       setParks(response.data.results)
  //     }
  //     getParks()
  //   }, [])
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
