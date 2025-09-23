import { useState } from "react";

const ObjectState = () => {
  const [obj, setObj] = useState({
    title: "Equalizer 3",
    rating: 7,
  });

  const handleClick = () => setObj({ ...obj, rating: 5 });

  return (
    <div className='demo'>
      <h2>Object State</h2>
      <h3>{obj.title}</h3>
      <h3>{obj.rating}</h3>
      <button onClick={handleClick}>Change rating</button>
    </div>
  );
};

export default ObjectState;
