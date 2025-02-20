import React from 'react'
import { Links,Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <ul style={{display:"flex",listStyle:"none",gap:"40px",fontSize:"20px"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
    </div>
  )
}

export default Navbar
