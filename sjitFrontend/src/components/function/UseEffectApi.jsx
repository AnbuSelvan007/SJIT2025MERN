import React, { useEffect, useState } from 'react'
import axios from 'axios';
const UseEffectApi = () => {
  const [data,setdata]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      setdata([...res.data])
  })
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
      <h1>fectch data using jsonplaceholder</h1>
      <ul>
      {
        data.map((dt,index)=>(
          <li key={index}>{dt.title}</li>
        ))
    }
    </ul>
    </div>
  )
}

export default UseEffectApi
