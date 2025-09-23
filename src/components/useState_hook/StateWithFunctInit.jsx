import {useState} from 'react';

const StateWithFunctionInitialization = () => {
  const [count, setCount] = useState(() => {
    const initial = 10;
    return initial;
  });

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  
  return <div className='demo'>
    <h2>State with Function Initialization</h2>
    <h3>Count: {count}</h3>
    <button onClick={increment}>++</button>
    <button onClick={decrement}>--</button>
  </div>;
}

export default StateWithFunctionInitialization;