function Greeting(props) {
  return props.isLoggedIn ? (
    <h2>Welcome {props.name}</h2>
  ) : (
    <h2>You should login first</h2>
  );
}
export default Greeting;
