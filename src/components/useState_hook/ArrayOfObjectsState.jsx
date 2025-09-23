import { useState } from "react";

const ArrayOfObjectsState = () => {
  const [objects, setObjects] = useState([
    { id: 1, title: "Örümcek Adam", rating: 3 },
    { id: 2, title: "Süperman", rating: 5 },
  ]);

  const changeTitle = () => setObjects(
    objects.map(m => (m.id === 1 ? { ...m, title: "Yağmur Adam" } : m))
  );

  return (
    <div className='demo'>
      <h2>Array of Objects - State</h2>
      <ul>
        {objects.map(m => (
          <li key={Math.random()}>
            {m.title} : {m.rating}
          </li>
        ))}
      </ul>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  );
};

export default ArrayOfObjectsState;
