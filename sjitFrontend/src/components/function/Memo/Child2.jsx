import React, { memo, useState } from 'react'

const Child2 = () => {
    const [text,setText]=useState('')
  return (
    <div>
      <h1>this is child 2</h1>
      <input type="text" onChange={(e)=>setText(e.target.value)} />
      <h2>text: {text}</h2>
    </div>
  )
}

export default memo(Child2)
