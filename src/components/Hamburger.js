import React, {useState} from 'react'
import '../index'
import styled from 'styled-components';

const Hmenu = styled.div`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 300px;
          height: 200px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 20px;
          color:white;
`

function Hamburger() {
    const [showHamburger, setShowHamburger]=useState(false);
    // const [ buttonHovered, setButtonHovered]=useState(false);


    const openMenu = () => {
         showHamburger(true);
    }
    const closeMenu = () => {
        setShowHamburger(false);
    }
   
  return (
    <div>
        <button style={Hmenu} onClick={openMenu}></button>
        {showHamburger && (
          <div>
          <div onClick = {closeMenu}>close</div>
          </div>
        )}
        
    </div>

  )
}

export default Hamburger