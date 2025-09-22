const User = ({img, name, age, isMarried, hobbies, children}) => {
  return (
    <div className="demo">
        <h2>Shows using props and children in React</h2>
        <img src={img} alt={name} width={200} />
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h4>Is married?: {isMarried}</h4>
        <h4>Hobbies: {hobbies}</h4>        
        {children}
    </div>
  );
}

export default User;