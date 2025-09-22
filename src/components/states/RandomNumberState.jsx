import {useState} from 'react';

const RandomNumberState = () => {
  const randomNumberGenerator = () => Math.floor(Math.random() * 100);
  const [random, setRandom] = useState(randomNumberGenerator());
  
  
  return <div className='demo'>
    <h2>Random Number State</h2>
    <h3>Count: {random}</h3>
    <button onClick={() => setRandom(randomNumberGenerator())}>Generate New Number</button>
  </div>;
}

export default RandomNumberState;