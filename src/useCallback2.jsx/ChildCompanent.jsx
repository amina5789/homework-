import { memo } from "react"

export const ChildComponent=  memo (({childAction})=>{
    console.log('child render')
    return <div>
        
        <button onClick={childAction}>click me</button>
    </div>
}) 

// memo кишируетт компанент предотваращая его повторный ререндер 
// memo перерисует компанет еслт пропысы этого компанента были изменены          