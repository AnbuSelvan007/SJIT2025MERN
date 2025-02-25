import React, { useState } from 'react'
import { Links,Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [dropdown,setdropdown]=useState(false);
  const [dropdown1,setdropdown1]=useState(false);
  return (
    <div style={{backgroundColor:"black",padding:"10px",color:"white"}}>
      <ul style={{display:"flex",listStyle:"none",gap:"20px",fontSize:"20px"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li onMouseOver={()=>setdropdown(true)} onMouseLeave={()=>setdropdown(false)}>
          <span >Hooks</span>
          <div className={dropdown?"drop  active":"drop"}>
          <Link to="/project">UseEffect</Link>
          <Link to="/project">Usestate</Link>
          <Link to="/useEffectApi">UseEffectApi</Link>
          <Link to="/useEffectApi">UseRef</Link>
          <Link to="/useMemo">UseMemo</Link>
          <Link to="/usecallback">UseCallBack</Link>
          <Link to="/usecustom">UseCustom</Link>
         
          </div>
        </li>
        <li onMouseOver={()=>setdropdown1(true)} onMouseLeave={()=>setdropdown1(false)}>
          <span >Memoization</span>
          <div className={dropdown1?"drop  active":"drop"}>
          <Link to="/memo">Memo</Link>
          <Link to="/lazy">Lazy/Suspense</Link>

          </div>
        </li>
        <li> <Link to="/Hoc">HOC</Link></li>
        <li> <Link to="/ContextAPI">ContextAPI</Link></li>
        

      </ul>
    </div>
  )
}

export default Navbar
