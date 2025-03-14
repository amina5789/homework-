import { useEffect, useState } from "react";

export function useDebounce(value,delay){
    const [debounceValue,setDebounceValue]= useState('')
    useEffect(()=>{
      const handle =  setTimeout(()=>{
            setDebounceValue(value)
        } ,delay)
        return ()=>{
            clearTimeout(handle)
        }
    },[value,delay]);
    return debounceValue;
}