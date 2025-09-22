import { useEffect, useState } from "react"

const UseEffectWithoutDepArray = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect without array called");
    document.title = `Value is ${value}`;
  }); // No dep array

  return (
    <div className="demo">
        <h2>useEffect without dependency array</h2>
        <h4>Value: {value}</h4>
        <button onClick={() => setValue(value + 1)}>Increment Value</button>
    </div>
  )
}

export default UseEffectWithoutDepArray