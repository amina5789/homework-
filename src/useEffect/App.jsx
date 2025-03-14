import { Test } from "./Test";
import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
function App(){

const [isShow, setIsShow] = useState(false);

const [inpValue,setValue] = useState("");
// console.log('значения input',inpValue);



const debols =useDebounce(inpValue,1000);

useEffect(()=>{
    if(debols.length ){
        console.log('кинуть запрос для поиска',debols);}
    },[debols])
    


console.log(debols)
    return (
        <div>
            <input  onChange={(e)=> setValue(e.target.value)} type="text"  placeholder="enter value for search"/>
            <button onClick={()=> setIsShow((prev) => !prev)}>видимость </button>
            {isShow ? <Test/> : null}         
        </div>)
}
export default App;