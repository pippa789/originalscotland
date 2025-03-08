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
    <div className='seal-gallery'>Seal
    <button onClick={openModal}>Seal</button>

    {isModalOpen && (
        <div className='seal-gallery'>
            <span className='close' onClick={closeModal}>&times;</span>
                <p>this is a small painting created after a long illnes. hopefull for summer</p>
        </div>
     )}
     </div>
)}

export default Seal