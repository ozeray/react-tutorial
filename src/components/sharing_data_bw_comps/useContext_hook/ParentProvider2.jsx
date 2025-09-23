/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import Child2 from "./Child2";

export const Data = createContext();

const ParentProvider2 = () => {
  const data = { name: "Ahmet", age: 46 };

  return (
    <div className="demo">
      <h2>1. Data sharing using data provider & useContext hook</h2>
      <Data.Provider value={data}>
          <Child2 />
      </Data.Provider>
    </div>
  );
};

export default ParentProvider2;
