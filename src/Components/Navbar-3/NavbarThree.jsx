import React, { useState, useEffect } from 'react'
import './styles.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [navbar, setNavbar] = useState(false)
  const [navbarText, setNavbarText] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className={navbarText ? 'navbarText active' : 'navbarText'}>
              <li to="/" className="nav-lis" onClick={closeMobileMenu}>
                About
              </li>
            </li>
            <li className={navbarText ? 'navbarText active' : 'navbarText'}>
              <li to="/work" className="nav-lis" onClick={closeMobileMenu}>
                Work
              </li>
            </li>
            <li className={navbarText ? 'navbarText active' : 'navbarText'}>
              <li to="/contact" className="nav-lis" onClick={closeMobileMenu}>
                Contact
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
