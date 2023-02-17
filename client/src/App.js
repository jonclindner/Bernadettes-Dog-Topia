import './App.css'

import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Create from './pages/Create'
import Review from './pages/Review'
import Update from './pages/Update'
import ParkInfo from './pages/ParkInfo'
import ParkCard from './components/ParkCard'
import Delete from './pages/Delete'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/review" element={<Review />} />

          <Route path="/parks/:parkId" element={<ParkInfo />} />
          <Route path="/parks/update/:parkId" element={<Update />} />
          <Route path="/parks/delete/:parkId" element={<Delete />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
