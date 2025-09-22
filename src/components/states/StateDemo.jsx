import {useState} from 'react';

const StateDemo = () => {
  const [count, setCount] = useState(0); // Return the state and a function that
  // can be used to set the state.
  const increment = () => setCount(count+1);
  const decrement = () => setCount(count-1);
  
  return <div className='demo'>
    <h2>State Demo</h2>
    <h3>Count: {count}</h3>
    <button onClick={increment}>++</button>
    <button onClick={decrement}>--</button>
  </div>;
}

export default StateDemo;