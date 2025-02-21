import React from 'react'

const track = (Component) => {
    const submitHandler=()=>{
        alert("login success");
    }
  return (props)=>{
    return(
        <form onClick={submitHandler}>
            <input type="text" />
            <input type="text" />
            <Component {...props} />
        </form>
       
    )
  }

}

export default track
