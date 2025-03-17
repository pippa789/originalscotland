// MobileHome.js
import React from 'react';
import "./mobile-view.css"; // Create a MobileHome.css

function MobileHome() {
  return (
    <div className="mobile-home-container">
      <div className="mobile-title">
        Welcome to Original Scotland (Mobile)
      </div>
      <div className="mobile-text">
        This is the mobile version of the homepage.
      </div>
      {/* Add your mobile-specific content here */}
    </div>
  );
}

export default MobileHome;