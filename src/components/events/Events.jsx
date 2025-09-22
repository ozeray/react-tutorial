const Events = () => {
  const clickHandler = () => console.log(Math.round(Math.random() * 10));
  const copyHandler = () => alert("Stop, copying is forbidden! :P");

  return (
    <div className='demo'>
      <h2>Events Demo</h2>
      <br/>
      <button onClick={clickHandler}>Click Me (writes a random number to the console)</button>
      <br />
      <p onCopy={copyHandler}>
        Try to select text and copy to see an alert :) <br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui vero
        laboriosam est eum. Ex impedit, in nostrum pariatur nisi vel, fugit cum
        maxime temporibus facilis quos soluta perspiciatis culpa quibusdam!
        Just for fun :)
      </p>
    </div>
  );
};

export default Events;
