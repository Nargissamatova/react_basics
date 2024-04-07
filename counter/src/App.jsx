import "./App.css";
import Greeting from "./UserGreeting";
import List from "./Lists";
import fruits from "./Lists";

function App() {
  return (
    <>
      <Greeting isLoggedIn={true} name="Nargis" />
      <List />
    </>
  );
}

export default App;
