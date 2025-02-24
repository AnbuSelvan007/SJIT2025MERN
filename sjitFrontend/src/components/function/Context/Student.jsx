import React, { useContext } from 'react'
import Teacher from './Teacher'
import { Markcontext } from './COE'

const Student = () => {
    const res=useContext(Markcontext);
  return (
    <div>
     
      {res!=null && <> Student <h2>Your Score is GPA:{res.gpa} CGPA:{res.cgpa}</h2></> }
      {res==null && <Teacher/>}
    </div>
  )
}

export default Student
