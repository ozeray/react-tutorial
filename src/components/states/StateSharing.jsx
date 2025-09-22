import { useState } from 'react'
import SS1 from './SS1';
import SS2 from './SS2';

const StateSharing = () => {
    const [count, setCount] = useState(0);

  return (
    <div className='demo'>
        <h2>State Sharing</h2>
        <SS1 count= {count} clickHandler={() => setCount(count + 1)} />
        <SS2 count= {count} clickHandler={() => setCount(count - 1)} />
    </div>
  )
}

export default StateSharing