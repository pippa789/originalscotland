import {Link} from 'react-router-dom'
import React from 'react'

function GalleryButton({ to, children }) {
  
  return (
    
    <Link to={to}><button className='gallery-button'>{children}</button></Link>
  )
}

export default GalleryButton