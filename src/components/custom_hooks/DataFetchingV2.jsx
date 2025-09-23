import useFetch from "./UseFetch";

const DataFetchingV2 = () => {

  const [data] = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="demo">
      <h2>Data fetching by useFetch custom hook</h2>
      {data ? (
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

export default DataFetchingV2;
