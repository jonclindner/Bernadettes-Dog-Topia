import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" style={{ color: 'white' }}>
          Home
        </NavLink>
        <NavLink to="/about" style={{ color: 'white' }}>
          About
        </NavLink>
        <NavLink to="/create" style={{ color: 'white' }}>
          Add a Park
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
