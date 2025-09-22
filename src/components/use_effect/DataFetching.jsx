import { useEffect, useState } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
      console.log("Data fetched in useEffect");
    }
    getData();
  }, []);

  return (
    <div className="demo">
      <h2>Data fetching by useEffect</h2>
      {data.length > 0 ? (
        <ul>
          {data.slice(0, 4).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DataFetching;
