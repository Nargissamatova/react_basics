// updater function - a function passedto setState() usually ex. setYear(arrow function) Allow for safe upadates on previous state based on previous state.

import { useState } from "react";

function Counter() {
  // Declare a state variable named "count", with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle the button click
  const handleIncrement = () => {
    // Use the callback form of setCount to ensure correct state update
    // Takes the Pending state to calculate Next state. React puts updater function in a queue (waiting in line). During the next rende, it will call them in the same order

    setCount((prevCount) => prevCount + 4);
    setCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;

/*

Explanation
Use the callback form of setCount:
setCount(prevCount => prevCount + 1);

setCount is called with a function instead of a direct value.
The function receives the previous state (prevCount) and returns the new state (prevCount + 1).

Why Use the Callback Form?
Reliability: The callback form ensures that the state update is based on the most recent state. This is especially important in scenarios where multiple state updates might occur in quick succession.
Avoiding stale state: When state updates depend on the previous state, using the callback form avoids potential issues with stale state values, which can happen if setCount is called multiple times before the component re-renders.

*/
