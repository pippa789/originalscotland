import React from 'react';
import {useState} from 'react';
import '../index.css';


const images = [
  { src: '/images/seal-gallery.png', alt: 'watercolor of a seal', className:'seal-gallery'},
  { src: '/images/dunoon-gallery.png', alt: 'beach scene at dunoon'},
  { src:'/images/fox-gallery.png', alt: 'a fox in the burn'},
  {src: '/images/south-gourock.png', alt:'south guorock'},
  {src:'/images/pheonix-gallery.png', alt: 'pheonix'},
  {src:'/images/sky-gallery.png', alt:'the isle of sky'},
  {src:'/images/crow-gallery.png', alt:'coastal scene with crow'},
  { src:'/images/cumbrea-gallery.png', alt:'the isle of cumbrea'},
  {src:'/images/summers-evening-g.png', alt: 'the woods on a summers evening'},
]



function Gallery() {
const [SelectedImage, setSelectedImage] = useState(null);
  return (
    <div className='container'>
      {images.map((image, index)=>(
        <img
        key={index}
        src={image.src}
        alt={image.alt}
        className={`image ${image.className}`} 
        onClick={()=>setSelectedImage(image.src)}
        />
      ))}

<div className={`modal-overlay ${SelectedImage ? "show" : ""}`} onClick={() => setSelectedImage(null)}>
        {SelectedImage && (
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={SelectedImage} alt="Selected Artwork" className="seal-modal" />
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✕</button>
          </div>
      )}
     </div>
    </div>
  )
}

export default Gallery