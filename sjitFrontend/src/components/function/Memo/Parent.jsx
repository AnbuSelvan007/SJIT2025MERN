import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
const Parent = () => {
  return (
    <div className='parent'>
        <h1>this is parent component</h1>
      <Child1/>
      <Child2/>

    </div>
  )
}

export default Parent
