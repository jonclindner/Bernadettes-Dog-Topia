import { useState } from 'react'
import axios from 'axios'

const CreatePark = () => {
  const initialState = {
    name: '',
    location: '',
    material: '',
    description: '',
    image: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios.post('http://localhost:3001/api/parks', formState)
    setFormState(initialState)
  }
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

export default CreatePark
