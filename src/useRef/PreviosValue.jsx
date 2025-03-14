import { useEffect, useRef, useState } from "react"

export function PreviosValue(){

    const [count,setCount]=useState(0)

    const prevCouter = useRef(null)
    useEffect(()=>{
        prevCouter.current =count;
console.log('счетчик меняется')
    },[count])
    return <div>
        <p>текущее состояние{count}</p>
        <p> предыдущее значение {prevCouter.current}</p>
        <button onClick={()=>setCount(count +1)}>увеличить</button>
       </div>
}