import { useContext } from "react";
import { Data } from "./ParentProvider2";

const NestedChild2 = () => {
  const data = useContext(Data);

  return (
    <div className="nestedChild">
      {data.name} - {data.age}
    </div>
  );
};

export default NestedChild2;
