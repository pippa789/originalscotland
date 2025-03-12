import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
display:flex;
flex-direction: flex-row;
justify-content: space-around;
margin: 0px;
padding: 0px
align-items: center;
height: 70px;
width: 100%;
background-color: black;
font-family: 'Poppins', sans-serif;
`


function Nav() {
    
    const LinkStyle = ({isActive}) => {
        return {
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'grey' : 'white',
        listStyle: 'none',
        textDecoration: 'none',
        padding:'0px 100px 50px 100px',
        }
    }  
   
    const navStyle = { 
    display:"flex",
    flexDirection: "flex-row",
    alignItems: 'center',
    padding: '50px',
    margin: "0px",
    listStyle: "none",
    borderBottom: "solid 1px",
    color:'red'
    
   };
  
  return (
    <NavBar>
        <ul style={navStyle}>
            <li>
            <NavLink style={LinkStyle}  to="/">Home</NavLink>
            </li>
        
            <li>
                <NavLink style={LinkStyle} to="/About">About</NavLink>
            </li>   
           <li>
                <NavLink style={LinkStyle} to="/Gallery">Gallery</NavLink>
            </li>
        </ul>
    </NavBar> 
      
  )
  }

export default Nav
