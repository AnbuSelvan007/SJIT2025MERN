import React, { useState, useMemo } from "react";
const doubleNum = (n) => {
    setTimeout(() => {
      return n * 2;
    }, 5000);
   
  };
const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState(false);
  const memofun = useMemo(()=>{
          return doubleNum(num);
        },[num] );
  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  return (
    <>
      <button onClick={() => setTheme(!theme)}>toggler</button>
      <div style={styling}>
        <h1>UseMemo</h1>
        <button onClick={() => setNum(num + 1)}>count</button>
        <h2>number:{num}</h2>
        <h2>Double of number:{memofun}</h2>
      </div>
    </>
  );
};

export default UseMemo;
