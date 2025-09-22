import { useEffect, useState } from 'react';

const UseEffectDemo = () => {
    const [name, setName] = useState(() => {
        const name = localStorage.getItem("name")
        return name ? JSON.parse(name) : "";
    });

    const handleChange = event => setName(event.target.value);

    useEffect(() => localStorage.setItem("name", JSON.stringify(name)), [name]);

    const handleClear = () => setName("");

  return (
    <div className='demo'>
      <h2>Change localStorage</h2>
        <input type='text' 
               placeholder='Enter your name' 
               value={name} 
               name='name'
               onChange={handleChange} />

        <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default UseEffectDemo