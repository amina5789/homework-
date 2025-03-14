// import { useReducer } from "react"


// const initialState = {count:0}




// function reducer(state,action){
//     switch(action.type){
//         case 'increment':
//             return {count: state.count + 1}
//         case 'decrement':
//             return {count: state.count - 1}
//         default:
//             return state
//     }
// }

// export function Counter(){
//     const [state,dispatch]= useReducer(reducer,initialState)



//     return <div>
//         <p>count: {state.count}</p>
//         <button onClick={()=>dispatch({type: 'increment'})}>+</button>
//         <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
//     </div>
// }



import { useReducer } from "react";

const initialState = { count: 0, history: [0] };

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
        history: [...state.history, state.count + 1],
      };
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, state.count - 1],
      };
    default:
      return state;
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div >
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <h2>История:</h2>
      <ul >
        {state.history.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
}
