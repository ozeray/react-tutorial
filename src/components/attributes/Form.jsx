const clazz = "demo";

const Form = () => (
  <form className={clazz}>
    <label htmlFor="name">Name</label>
    <input type="text" placeholder="Enter your name" name="name" />
  </form>
);

export default Form;
