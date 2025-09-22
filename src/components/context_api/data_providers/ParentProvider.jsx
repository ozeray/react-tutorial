/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import Child from "./Child";

export const Data = createContext();
export const Data2 = createContext();

const ParentProvider = () => {
  const [name, setName] = useState('');
  const age = 46;

  return (
    <div className="demo">
      <h2>Data sharing using Data Provider - Consumer method</h2>
      <Data.Provider value={name}>
        <Data2.Provider value={age}>
            <Child />
        </Data2.Provider>
      </Data.Provider>
      <br />
      <button onClick={() => setName("Here is your data, son..")}>Set Data for Nested Child</button>
    </div>
  );
};

export default ParentProvider;
