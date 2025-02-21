import React, { memo, useState } from 'react'

const Child1 = () => {
    const[num,setNum]=useState(0);
  return (
    <div>
      <h1>Hello this is child 1</h1>
      <button onClick={()=>setNum(num+1)}>count</button>
      <h2>number={num}</h2>
    </div>
  )
}

export default memo(Child1)
