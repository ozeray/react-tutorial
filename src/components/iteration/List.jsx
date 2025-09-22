const List = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="demo">
      <h2>Rendering a number list</h2>
      <ul>
        {numbers.map((number) => (
          <li key={Math.random()}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
