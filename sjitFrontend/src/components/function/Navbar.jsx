import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul style={{display:"flex",listStyle:"none",gap:"40px",fontSize:"20px"}}>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Gallery</a></li>
        <li><a href="">Contact</a></li>
        
      </ul>
    </div>
  )
}

export default Navbar
