import React from 'react'
import useMemoize from './CustomHook'

const UseMemoize = () => {
    const [custID,setCustID]=useMemoize("CustomerId","")
    const [pass,setPass]=useMemoize("Password","")
    const submitHandler=()=>{
        localStorage.removeItem("CustomerID");
        localStorage.removeItem("Password");
    }
  return (
    <div>
      <h1>this is use memoizehooks</h1>
      Customer Id:<input type="text" value={custID} onChange={(e)=>setCustID(e.target.value)}/><br/>
      Password:<input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/><br/>
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default UseMemoize
