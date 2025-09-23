const SS2 = ({ count, clickHandler }) => {
  return (
    <div>
        <div>{count}</div>
        <button onClick={clickHandler}>Decrement</button>
    </div>
  )
}

export default SS2