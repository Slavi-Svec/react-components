import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Text from '../../Components/Text/Text'
import './styles.css'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeHamburger = () => {
    setNavbarOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="hamburger-menu" onClick={handleToggle}>
        <i className={navbarOpen ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={navbarOpen ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className="nav-links">
            About
          </Link>
        </li>
        <li>
          <Link
            to="services"
            activeClassName="active-link"
            onClick={() => closeHamburger()}
            exact
          >
            Services
          </Link>
        </li>
        <li>
          <Link to="contact" className="nav-links">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
