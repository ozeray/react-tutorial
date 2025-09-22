import { useState } from "react"

const Switcher = () => {
    const [sw, SetSw] = useState(false);

  return <div className="demo">
    <h2>Using 'key' to create a 'unique' component</h2>
    { sw ? <span>Light</span> : <span>Dark</span> }
    <br />
    <input type="text" key={sw ? 'light' : 'dark'} /> {/* Her iki durumda özgün bir bileşen gibi davranmış oluyor */}
    <button onClick={() => SetSw(s => !s)}>Switch</button>
  </div>;
}

export default Switcher