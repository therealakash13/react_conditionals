import Input from "./Input";
function Form(props) {
  return (
    <form className="form">
      <Input type={"text"} placeholder={"Username"} />
      <Input type={"password"} placeholder={"Password"} />
      {props.userState && (
        <Input type={"password"} placeholder={"Confirm password"} />
      )}
      <button type="submit">{props.userState ? "Login" : "Register"}</button>
    </form>
  );
}
export default Form;
