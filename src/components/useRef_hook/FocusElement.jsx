import { useRef } from "react"

const FocusElement = () => {
    const inputElement = useRef(null);
    const handleClick = () => {
        inputElement.current.focus();
        inputElement.current.value = "Ahmet";
    }

  return (
    <div className="demo">
        <h2>Using useRef hook to access DOM elements</h2>
        <input type="text" ref={inputElement} />
        <button onClick={handleClick}>Focus input & write text</button>
    </div>
  )
}

export default FocusElement