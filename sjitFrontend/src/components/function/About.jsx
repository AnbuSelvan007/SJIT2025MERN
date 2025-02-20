import React, { useEffect, useState } from 'react'

function About() {
    var [text,setText]=useState("");
    useEffect(()=>{
      
    },[text])
  return (
    <div>
      <input type="text" placeholder='type here' onChange={(e)=>setText(e.target.value)}/>
      <h1>{text}</h1>
    </div>
  )
}

export default About
