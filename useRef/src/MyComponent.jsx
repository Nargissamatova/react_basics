import { useState, useEffect, useRef } from "react";

// useRef returns an object with a single current property initially set to the intial value you provided

function MyComponent() {
  // const [number, setNumber] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    console.log("comp rendered");
  });

  function handleClick() {
    // setNumber((n) => n + 1);
    ref.current++;
    console.log(ref.current);
  }
  return (
    <div>
      <h3>{ref.current}</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyComponent;
