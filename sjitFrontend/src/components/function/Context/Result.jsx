import React, { useContext } from 'react'
import { Markcontext } from './COE'

const Result = () => {
    const res=useContext(Markcontext);
  return (
    <div>
      Result
      <h1>Your GPA is {res.gpa} CGPA is{res.cgpa}</h1>
    </div>
  )
}

export default Result
