import React from 'react'
import './Nav.css'
import logo from '../../src/assets/logo.png'
import { Link } from 'react-router-dom'

export const Nav = () => {
  
  return (
    <div className='nav'>
        <div className="nav-right">
          <img src={logo} alt="" />
          <ul className='nav-list-container'>
            <Link to={'/'}><li className='active'>Home</li></Link>
            <Link to={'/form'}><li>Book Now</li></Link>
              <li><a href="#about">About</a></li>
            <Link to={'contact'}><li>Contact US</li> </Link>
          </ul>
        </div>
    </div>
  )
}
