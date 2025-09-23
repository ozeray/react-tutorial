# useReducer

Used when the state consists of more complex logic with multiple sub-values.  
Usage: `const [state, dispatch] = useReducer(reducer, initialState);`  

## state

Current state

## dispatch

Payload that can be used to trigger the update

## initialState

Initial state object for the component.

## reducer

`const reducer = (state, action) => ...`  
Here `state` is what are we updating (previous state) and `action` is how are we updating (arguments necessary to perform update).  
So the `reducer`takes the previous state and uses `action`argument to decide how to update the state, and finally returns the new state.  
The destructured `state` can be used inside the code to access the latest state of the component, whereas `dispatch` can be called with a parameter that is of same instance with the `action` (in effect, `dispatch` will call the `reducer`'s `action` behind the scene). This way we can manage component state in a granular manner.
