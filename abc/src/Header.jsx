import React from 'react'
import { NavLink ,Link} from 'react-router';
import './Header.css'
function Header() {
  return (
   <header>
        <nav className="navbar">
            <Link to="/"><h2>Simple Website</h2></Link>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
           <NavLink to="/service">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="signup-buttons">
              
                <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                   Log In
                  </button>
            </div>
        </nav>
    </header>
  )
}

export default Header
