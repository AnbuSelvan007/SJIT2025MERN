import React, { useState } from 'react'
import { Links,Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [dropdown,setdropdown]=useState(false);
  return (
    <div>
      <ul style={{display:"flex",listStyle:"none",gap:"70px",fontSize:"20px"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li onMouseOver={()=>setdropdown(true)} onMouseLeave={()=>setdropdown(false)}>
          <span >Hooks</span>
          <div className={dropdown?"drop  active":"drop"}>
          <Link to="/project">UseEffect</Link>
          <Link to="/project">Usestate</Link>
          <Link to="/useEffectApi">UseEffectApi</Link>
          <Link to="/useEffectApi">UseRef</Link>
          <Link to="/useMemo">UseMemo</Link>
          </div>
        </li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>
    </div>
  )
}

export default Navbar
