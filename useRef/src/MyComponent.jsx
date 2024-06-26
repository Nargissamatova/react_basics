import { useState, useEffect, useRef } from "react";

function MyComponent() {
  const [number, setNumber] = useState(0);

  useRef(() => {
    console.log("comp rendered");
  });

  function handleClick() {
    setNumber((n) => n + 1);
  }
  return (
    <div>
      <h3>{number}</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyComponent;
