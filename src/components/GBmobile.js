import {Link} from 'react-router-dom'
import React from 'react'

function GBmobile({ className, to, children }) {
  
  return (
    
    <Link to={to} className={className}>
        {children}
    </Link>
  )
}

export default GBmobile