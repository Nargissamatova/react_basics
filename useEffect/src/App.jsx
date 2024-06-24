// useEffect() = react hook that tells React DO SOME CODE WHEN (pick one):
// This component re-renders
// This component mounts
// The state of a value

// useEffect(function, dependencies)

// 1. useEffect(() => {})   Runs after every re-render
// 2. useEffect(() => {}, [])   Runs only on mount
// 3. useEffect(() => {}, [value])  Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from API
// #5 Clean up when a component unmounts (removing component from DOM)

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  /*
   useEffect(() => {
    document.title = `Count: ${count}`;
  });
   */

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }
  function subtractCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <div>
        <p style={{ color: color }}>Count {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change color</button>
      </div>
    </>
  );
}

export default App;
