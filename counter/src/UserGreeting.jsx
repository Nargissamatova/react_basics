// CONDITIONAL RENDERING

// PropTypes are a way to specify the expected types of properties passed to a React component, which helps catch bugs early and provide clear documentation for other developers.
import PropTypes from "prop-types";

function Greeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.name}</h2>
  );
  const loginPrompt = <h2 className="login-prompt">You should login first</h2>;

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}
Greeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  name: PropTypes.string,
};

// sets default values for the props
Greeting.defaultProps = {
  isLoggedIn: false,
  name: "Guest",
};
export default Greeting;
