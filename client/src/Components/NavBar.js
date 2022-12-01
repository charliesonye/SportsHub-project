import React from 'react'
import { NavLink } from 'react-router-dom';

const linkStyles = {
  display: "inline-block",
  fontFamily: 'Kongtext',
  borderRadius: "25px",
  width: "90px",
  padding: "12px",
  margin: "0 12px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
}; 

 function NavBar() {
  return (
    <div>
      <NavLink end to='/' style={linkStyles}>
        Home
      </NavLink>
      <NavLink to='/teams' style={linkStyles}> 
        Teams
      </NavLink>
      <NavLink to='/competitions' style={linkStyles}>
        Competitions
      </NavLink>
    </div>
  )
}


export default NavBar