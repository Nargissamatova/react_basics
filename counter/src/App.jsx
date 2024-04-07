import "./App.css";
import Greeting from "./UserGreeting";

function App() {
  return (
    <>
      <Greeting isLoggedIn={true} name="Nargis" />
    </>
  );
}

export default App;
