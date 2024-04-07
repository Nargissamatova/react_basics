import { useState } from "react";

function Button() {
  const [counter, setCounter] = useState(0);

  const increaser = () => {
    setCounter(counter + 1);
  };
  const decreaser = () => {
    setCounter(counter - 1);
  };
  const zero = () => {
    setCounter(counter * 0);
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increaser}>Increase</button>
      <button onClick={decreaser}>Decrease</button>
      <button onClick={zero}>Reset</button>
    </div>
  );
}

export default Button;
