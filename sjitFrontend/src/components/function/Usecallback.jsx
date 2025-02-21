import React,{useCallback, useState} from 'react'

const Usecallback = () => {

    const [num, setNum] = useState(0);
      const [theme, setTheme] = useState(false);
      
      var don=useCallback(()=>{
        var mul=5;
        return [num+mul*2,num+mul*3,num+mul*4];
    })
      
      var styling = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
      };
  return (
    <>
      <button onClick={() => setTheme(!theme)}>toggler</button>
      <div style={styling}>
        <h1>UseCallback</h1>
        <button onClick={() => setNum(num + 1)}>count</button>
        <h2>number:{num}</h2>
        <h2>Double of number:
            {don().map((item,index)=>(
                <h2>{item}</h2>
            ))
            }</h2>
      </div>
    </>
  )
}

export default Usecallback

