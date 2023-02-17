import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const UpdatePark = () => {
  let navigate = useNavigate()
  //   const initialState = {
  //     name: '',
  //     location: '',
  //     material: '',
  //     description: '',
  //     image: ''
  //   }
  let { parkId } = useParams()
  console.log(parkId)
  const [formState, setFormState] = useState({})

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios.put(`http://localhost:3001/api/parks/${parkId}`, formState)
    setFormState({})
    navigate(`/`)
  }
  useEffect(() => {
    const getParkDetails = async () => {
      let response = await axios.get(
        `http://localhost:3001/api/parks/${parkId}`
      )
      setFormState(response.data.park)
    }
    getParkDetails()
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name of Park:</label>
      <input
        type="text"
        id="name"
        onChange={handleChange}
        value={formState.name}
      />
      <label htmlFor="location">Location or Neighborhood:</label>
      <input
        type="text"
        id="location"
        onChange={handleChange}
        value={formState.location}
      />
      <label htmlFor="material">Ground Surface Material:</label>
      <select id="material" onChange={handleChange} value={formState.material}>
        <option value="dirt">Dirt</option>
        <option value="grass">Cultivated Grass</option>
        <option value="gravel">Gravel</option>
        <option value="mix">Mix of Materials</option>
      </select>
      <label htmlFor="description">Park Description</label>
      <input
        type="text"
        id="description"
        onChange={handleChange}
        value={formState.description}
      />
      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        onChange={handleChange}
        value={formState.image}
      />
      <button type="submit">Submit Information</button>
    </form>
  )
}

export default UpdatePark
