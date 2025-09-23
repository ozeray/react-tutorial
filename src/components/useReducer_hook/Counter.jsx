import { useReducer } from "react";
import { initialState, reducer } from "./counterReducer";

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="demo">
        <h2>Complex state management using useReducer hook</h2>
        <h4>State: {state.count}</h4>
        <button onClick={() => dispatch({ type: "increment", amount: 2 })}>Increase by 2</button>
        <button onClick={() => dispatch({ type: "decrement", amount: 3 })}>Decrease by 3</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  )
}

export default Counter