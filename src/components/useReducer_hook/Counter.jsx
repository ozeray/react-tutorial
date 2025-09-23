import { useReducer } from "react";

const initialState = { count : 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state, count: state.count + 1};
        case "decrement":
            return {...state, count: state.count - 1};
        case "reset":
            return {...state, count: initialState.count};
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="demo">
        <h4>State: {state.count}</h4>
        <button onClick={() => dispatch({ type: "increment" })}>++</button>
    </div>
  )
}

export default Counter