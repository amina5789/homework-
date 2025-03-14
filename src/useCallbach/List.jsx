import { useEffect, useState } from "react"

const List =({getItems})=>{
    const [items,setitems ]= useState([]) 

    useEffect(()=>{
        setitems(getItems())
        console.log('hello')
    },[getItems])
    
    return items.map((item)=> <div>{item}</div>)
}


export default List