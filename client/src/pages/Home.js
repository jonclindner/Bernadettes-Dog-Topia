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
import ViewParks from './ViewParks'

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
      <div>
        <ViewParks />
      </div>
      {/* <img
        style={{ display: 'block', maxWidth: '100%' }}
        src="https://ih1.redbubble.net/image.1691462226.2536/st,small,507x507-pad,600x600,f8f8f8.jpg"
        alt="logo"
      /> */}
    </div>
  )
}

export default Home
