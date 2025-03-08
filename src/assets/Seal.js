import React, { useState } from 'react';
import'../index.css';


function Seal() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
 
  return (
    <div className='seal-gallery'>
    <button onClick={openModal}>More info</button>

    {isModalOpen && (
        <div className='modal'>
            <div className='modal-text'>
                <p>this is a small painting created after a long illnes. hopefull for summer</p>
                <div className='seal-modal'>
            <span className='close' onClick={closeModal}>Close</span>
        </div>        
        </div>
        </div>
     )}
     </div>
)}

export default Seal