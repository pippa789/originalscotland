import React from 'react';
import { useState, useEffect,  } from 'react';
import MobileAbout from './components/MobileAbout';

function About() {
 
const [isMobile, setIsMobile]= useState(window.innerWidth <=480)
  
    useEffect(() =>{
      const handleResizse = () => {
        setIsMobile(window.innerWidth <= 480);
      };
      window.addEventListener('resize', handleResizse)
    },[])

    // const location = useLocation(); //this little function insures the page always opens at the top//
    // useEffect(()=> {
    //   window.scrollTo(0, 0)
    // },[location])
     
  return  isMobile ? <MobileAbout/>:(
    <>
    <div className='about-container'>
    <div className='about-text'>    My journey as a landscape artist began with an unexpected spark. I remember my first doodle, born of quiet boredom behind a bar, where familiar faces emerged from tentative lines. Then, a turning point: a frail, abandoned dog named Ruby, who became my companion and muse. Together, we discovered a hidden woodland, a sanctuary that ignited my passion for nature.</div>

    <div className='about-left'>As a Southern California girl who found her heart in the UK, I was captivated by the soft green woods and wildflower-strewn hills. These landscapes weren't just scenery; they were a conversation. Through countless hours of watercolor painting, amidst ice and rain, and golden summer days, I learned to listen. Nature became my teacher, revealing both her wonder and my own inner landscape. </div>
    <div className='ruby'></div>
    
   <div className='about-right'> With each brushstroke, I felt a dialogue unfolding, a deeper understanding of both the world around me and the emotions within. Ruby is gone now, as is my time in Liverpool. </div>
   <div className='about-bottom'> But my journey has led me to a new land, where the veil between the seen and unseen feels thin, and the landscape's beauty holds a profound mystery. Here, I've come to understand that this path, this connection to nature, is no accident—it's the journey I was always meant to take.
   My art is an expression of this ongoing conversation, a translation of the landscape's whispers into visual form. I invite you to explore my work and experience the places that have shaped my vision."</div>
    </div>
    </>
  )
}

export default About