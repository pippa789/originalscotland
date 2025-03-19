import React from 'react';
import './mobile-view.css';


function MobileAbout() {
//   const location = useLocation(); //this little function insures the page always opens at the top//
//   useEffect(()=> {
//     window.scrollTo(0, 0)
//   },[location])
   
  return (
    <>
    <div className='aboutmobile-container'>
    
    <div className='aboutmobile-text'>What began as quiet doodles unexpectedly blossomed into a life as a landscape artist, a transformation deeply influenced by my bond with a rescued dog, Ruby. 
    Trading Southern California sunshine for Britain's soft green woods 
    </div>
    <div className='ruby-mobile'></div>
    <div className='aboutmobile-left'>and wildflower hills, I learned to truly listen  to the land through countless hours of watercolor painting. </div>
    
   <div className='aboutmobile-bottom'>  Now residing in a new, mystical location where the landscape holds a deep sense of wonder, my art continues to translate this ongoing conversation with the natural world. Explore the places that have shaped my vision and the whispers I strive to capture in visual form."</div>
    </div>
    </>
  )
}

export default MobileAbout