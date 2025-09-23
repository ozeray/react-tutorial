/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

const UseEffectWithEmptyDepArray = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect with empty array called");
    document.title = `Value is ${value}`;
  }, []);

  return (
    <div className="demo">
        <h2>useEffect with empty dependency array</h2>
        <h4>Value: {value}</h4>
        <button onClick={() => setValue(value + 1)}>Increment Value</button>
    </div>
  )
}

export default UseEffectWithEmptyDepArray