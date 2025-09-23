const SS1 = ({ count, clickHandler }) => {
  return (
    <div>
        <div>{count}</div>
        <button onClick={clickHandler}>Increment</button>
    </div>
  )
}

export default SS1