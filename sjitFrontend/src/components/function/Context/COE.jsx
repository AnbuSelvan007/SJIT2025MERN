import React from 'react'
import Result from './Result'
import Student from './Student';
export  const Markcontext=React.createContext();
const COE = () => {
  
  return (
    <div>
      The COE
      <Markcontext.Provider value={{cgpa:10,gpa:10}}>
            <Result/>
            <Student/>
      </Markcontext.Provider>
     
    </div>
  )
}

export default COE
