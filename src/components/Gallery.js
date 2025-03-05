import React from 'react';
import {useState} from 'react';
import '../index.css';



const images = [
  {src: '/images/seal-gallery.png', alt: 'watercolor of a seal', className:'seal-gallery'},
  {src: '/images/dunoon-gallery.png', alt: 'beach scene at dunoon',className:'dunoon-gallery'},
  {src:'/images/fox-gallery.png', alt: 'a fox in the burn', className:'fox-gallery'},
  {src: '/images/south-gourock.png', alt:'south guorock', className:'south-gourock'},
  {src:'/images/pheonix-gallery.png', alt: 'pheonix', className:'pheonix-gallery'},
  {src:'/images/sky-gallery.png', alt:'the isle of sky', className:'sky-gallery'},
  {src:'/images/crow-gallery.png', alt:'coastal scene with crow', className:'crow-gallery'},
  {src:'/images/cumbrea-gallery.png', alt:'the isle of cumbrea', className:'cumbrea-gallery'},
  {src:'/images/summers-evening-g.png', alt: 'the woods on a summers evening', className:'summers-evening-g'},
]



function Gallery() {
const [SelectedImage, setSelectedImage] = useState(false);


  return (
    <div className='container'>
      {images.map((image, index)=>(
        <img
        key={index}
        src={images.src}
        alt={image.alt}
        className={`image ${image.className}`} 
        onClick={()=> setSelectedImage(...images)} 
        />
      ))}
      
    {SelectedImage && (
        <div className="modal-overlay show" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={SelectedImage} alt={SelectedImage}className="modal-image" />
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}
     </div>
      )
}


export default Gallery