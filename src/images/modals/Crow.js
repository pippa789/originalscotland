import React from 'react';
import {useState} from 'react-dom';

function Crow() {
    const [modalOpen, setmodalOprn]= useState(false);

    const openModal = () => {setmodalOprn(true)};

    const closeModal = () => {
        setmodalOprn(false);
    }
  return (
    
    <div className='crow-modal'>Crow</div>
  )
}

export default Crow