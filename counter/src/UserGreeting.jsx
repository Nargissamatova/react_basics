function Greeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.name}</h2>
  );
  const loginPrompt = <h2 className="login-prompt">You should login first</h2>;

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}
export default Greeting;
