import { useEffect, useRef } from "react";
import { PreviosValue } from "./PreviosValue";
import { Timer } from "./Taimer";

function App(){

//    const inputRef = useRef()

// useEffect(()=>{
//     if(inputRef.current){
//         console.log(inputRef)
// inputRef.current.focus();
// inputRef.current.placeholder = 'we set new placeholder'
// inputRef.current.value = 'we set new placeholder'
//     }
// },[])
    return <div>
        {/* <input ref={inputRef} type="text" /> */}
        {/* <PreviosValue/> */}
        <Timer />
    </div>
}

export default App;