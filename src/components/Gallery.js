import React from 'react'
import Seal from '../assets/Seal'
import Dunoon from '../assets/Dunoon'
import Fox from '../assets/Fox'
import Gourock from '../assets/Gourock'
import Pheonix from '../assets/Pheonix'
import Sky from '../assets/Sky'
import Crow from '../assets/Crow'
import Cumbrea from '../assets/Cumbrea'
import Evening from '../assets/Evening'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


function Gallery() {
   const location = useLocation(); //this little function insures the page always opens at the top//
  useEffect(()=> {
    window.scrollTo(0, 0)
  },[location])
  return (
    <div className='container'>Gallery
      <Seal/>
      <Dunoon/>
      <Fox/>
      <Gourock/>
      <Pheonix />
      <Sky/>
      <Crow/>
      <Cumbrea/>
      <Evening/>
    </div> 
  )
}

export default Gallery