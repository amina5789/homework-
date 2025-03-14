import { useState } from "react"
// 1) Вызывать хуки только на верхнем уровне
// -- мы не должны вызывать их внутри циклов , условий или вложенных функций  
// хуки всегда должны вызывать в одном и том же порядки при каждом рендере компанента 
// 2) хуки используються только внутри функциональных компонентов
// - нельзы вызывать хуки в обычных js функциях    
export const Counter = () => {
    // хук useState возвращает массив из двух элементов и ловить состояния 
    const  [count,setCount]=useState(0)
    return <div  style={{display:"flex",gap:'40px',alignItems:'center'}}>
       <button onClick={()=>setCount((prev)=> prev - 1)}>-</button>
        <p> {count} </p>
        <button onClick={()=>setCount((prev)=>prev + 1)} >+</button>
    </div>
}