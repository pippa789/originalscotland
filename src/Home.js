import React, { useState, useEffect } from 'react';
import "./images/seal-modal.png";
import GalleryButton from './components/GalleryButton';
import MobileHome from './components/MobileHomeView';


function Home() {
  const [isMobile, setIsMobile]= useState(window.innerWidth <=480)

  useEffect(() =>{
    const handleResizse = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResizse)
  },[])
  return isMobile ? <MobileHome/>: (
  <div className='home-container'>
    <div className='title'> 
      Welcome to Original Scotland </div> 
      <div className='home-text'>I'm Pippa Bullock, an artist living and working amidst the magic of Scotland's West Coast and Hebrides. Here, the oldtimers say the veil between our world and the divine is "thin," and it's in this space that I create. For me, painting a landscape isn't about replicating a scene; it's about interpreting nature's voice and sharing that conversation with you through each piece I create. Browse my gallery to discover more.</div>
        <div className='cover'></div>
        <GalleryButton className='gallery-button' to='/Gallery'>Browse Gallery</GalleryButton>
        </div> 
  )
}

export default Home