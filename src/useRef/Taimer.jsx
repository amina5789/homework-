import { useRef, useState } from "react"

export function Timer(){

const [time,setTime]=useState(0);
const timerRef=useRef(null)

const startTime =()=>{
    if(! timerRef.current){
        timerRef.current = setInterval(()=>{
            setTime(prev=>prev+1)
        },1000)
    }
}

    const pauseTimer =()=>{
        if(timerRef.current){
            clearInterval(timerRef.current)
            timerRef.current =null
        }
    }

const reselveTimer= ()=>{
    if(time ){
        setTime(0)
     
      
    }
    if(timerRef.current){
        clearInterval(timerRef.current)
        timerRef.current =null
    }
}

    return <div>
<h2>время:{time} сек</h2>
<button onClick={startTime}>{!time ? 'Cтарт' : 'продолжить'}</button>
<button onClick={pauseTimer}>Пауза</button>
<button onClick={reselveTimer}>Cбросить</button>
</div>
}