import List from "./List"

const { useState, useCallback } = require("react")

const UseCallback =()=>{
    const  [number,setNumber] =useState(1)
const [dark,setDark] =useState(false)



const them ={
    backgroundColor:dark? 'black' :'white',
    color: dark ? 'white' : 'black',
}

const getItems = useCallback(()=>{
    return [number,number + 1,number +2];
},[number])

// setDark((prev)=>!prev)
return <div style={them}> 
<input type="number" placeholder="number..."  value={number}  onChange={(e)=>setNumber(parseInt(e.target.value))}/>
<button  onClick={()=> dark ? setDark(false) : setDark(true)}>togee</button>
<List getItems={getItems}/>
</div>
}

export default UseCallback