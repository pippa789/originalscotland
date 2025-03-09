import React from 'react'
import { NavLink } from 'react-router-dom'



function Footer() {
  return (
    <>
    <div className='footer'>
      <ol className='footer-style' >
        <li>Email allenpip341@gmail.com</li>
        <li> Etsy shop  </li>
      </ol>
      </div>

      <ul >
        <li>
          <NavLink  to='/'>Home</NavLink>
          <NavLink  to='/About'>About</NavLink>
          <NavLink  to='/Gallery'>Gallery</NavLink>
        </li>
      </ul>
    
    </>
  )
}

export default Footer