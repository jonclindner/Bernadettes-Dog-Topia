import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ParkCard from '../components/ParkCard'

const Viewparks = () => {
  const [parks, setParks] = useState([])

  let { parkId } = useParams()

  useEffect(() => {
    let isCancelled = false
    const getParks = async () => {
      const response = await axios.get('http://localhost:3001/api/parks')
      console.log(response.data.parks)
      //   if (!isCancelled) {
      setParks(response.data.parks)
      //   }
    }
    getParks()
    return () => {
      isCancelled = true
    }
  }, [parkId])

  return (
    <div className="container-grid">
      {parks.map((park) => (
        // <Link to={`/games/details/${game.id}`} key={game.id}>
        <ParkCard
          {...park}
          // image={park.background_image}
        />
        // </Link>
      ))}
    </div>
  )
}

export default Viewparks
