import { useState, useEffect, useRef } from "react";

// useRef returns an object with a single current property initially set to the intial value you provided

function MyComponent() {
  // const [number, setNumber] = useState(0);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("comp rendered");
    console.log(inputRef1);
  });

  function handleClick1() {
    // setNumber((n) => n + 1);
    //  ref.current++;
    // console.log(ref.current);
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }
  return (
    <div>
      {/*<h3>{ref.current}</h3>*/}
      <button onClick={handleClick1}>Click me 1</button>
      <input ref={inputRef1} />
      <br />
      <button onClick={handleClick2}>Click me 2</button>
      <input ref={inputRef2} />
      <br />
      <button onClick={handleClick3}>Click me 3</button>
      <input ref={inputRef3} />
    </div>
  );
}

export default MyComponent;
