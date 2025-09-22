const InvalidPassword = ()=> <h4>Invalid Password</h4>;
const ValidPassword = ()=> <h4>Valid Password</h4>;

const Password = ({isValid}) => isValid ? <ValidPassword /> : <InvalidPassword />;

export default Password;