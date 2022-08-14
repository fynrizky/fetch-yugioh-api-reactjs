import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav>
        <div className='nav-head'>
          <Link className='logo' to={`/`}>
            YCards
          </Link>
          
        </div>
        <div className='nav-link'>
            <Link className='link' to={`/`}>Home</Link>
            <Link className='link' to={`/about`}>About</Link>
        </div>
      </nav>
    </div>
    
  )
}

export default Navbar