import { useCallback, useState } from "react";
import { ChildComponent } from "./ChildCompanent";

function App(){
const [count,setCount]=useState(0)
    const handeClick = useCallback(()=>{
        setCount((prev)=> prev +1)
    },[])


    return <div>
        <button onClick={handeClick}>Incriment</button>
        <ChildComponent childAction={handeClick}/>
        <p>count:{count}</p>
    </div>
}

export default App;