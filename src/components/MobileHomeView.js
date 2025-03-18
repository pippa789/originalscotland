// MobileHome.js
import React from 'react';
import GBmobile from './GBmobile';
import "./mobile-view.css"; // Create a MobileHome.cssimport 'G'
function MobileHome() {
  return (
    <div className="mobile-home-container">
      <div className="mobile-title">
        Welcome to Original Scotland 
      </div>
      <div className="mobile-text">
      I'm Pippa Bullock, an artist in Scotland's 'thin places'—where oldtimers say the veil between worlds is near. My art isn't just scenes, but nature's voice, shared through each piece. Explore my gallery."
      </div>
      
      <div className='mobile-img'></div>
      <GBmobile className='mobile-btn' to='/Gallery'>Browse Gallery</GBmobile>
    </div>
  );
}

export default MobileHome;