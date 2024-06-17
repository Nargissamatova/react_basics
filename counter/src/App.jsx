import "./App.css";
import Greeting from "./UserGreeting";
import List from "./Lists";
import Button from "./Counter";

function App() {
  const fruits = [
    { name: "apple", calories: 52 },
    { name: "banana", calories: 89 },
    { name: "orange", calories: 47 },
    { name: "strawberry", calories: 33 },
    { name: "grape", calories: 69 },
    { name: "watermelon", calories: 30 },
    { name: "pineapple", calories: 50 },
    { name: "kiwi", calories: 61 },
    { name: "mango", calories: 60 },
    { name: "peach", calories: 39 },
  ];
  const vegetables = [
    { name: "carrot", calories: 41 },
    { name: "broccoli", calories: 34 },
    { name: "spinach", calories: 23 },
    { name: "cucumber", calories: 15 },
    { name: "bell pepper", calories: 31 },
    { name: "tomato", calories: 18 },
    { name: "onion", calories: 40 },
    { name: "zucchini", calories: 17 },
    { name: "celery", calories: 6 },
    { name: "lettuce", calories: 5 },
  ];
  const cars = ["Ford", "BMW", "Toyota"];
  return (
    <>
      <Greeting isLoggedIn={true} name="Nargis" />
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
      <Button />
    </>
  );
}

export default App;
