import { useState,useEffect } from "react";
const useMemoize=(key,val)=>{
    var [text,setText]=useState(()=>{
        var jsonValue=localStorage.getItem(key);
        if(jsonValue!==null)
        {
            return JSON.parse(jsonValue);
        }
        return val;
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(text))
        
    },[text,val])
    return [text,setText]
}
export default useMemoize;