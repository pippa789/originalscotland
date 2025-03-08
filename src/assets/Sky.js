import React, { useState } from 'react';
import'../index.css';


function Sky() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [buttonHovered, setButtonHovered] = useState(false); // State for hover effect



    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

  return (
    <div className='sky-gallery'>
        <button className='modal-button'
        onClick={openModal}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        style={{ opacity: buttonHovered ? 1:.08 , transition: 'opacity 0.3s ease' }} // Apply hover effect
      >More info</button>

    {isModalOpen && (
        <div className='modal'>
            <div className='modal-text'>
                <p>this is a small painting created after a long illnes. hopefull for summer</p>
                    <div className='close' onClick={closeModal}>Close</div>
                    <div className='sky-modal'>   
                </div>
            </div>
        </div>
     )}
     </div>
)}
export default Sky