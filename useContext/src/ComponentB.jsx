import ComponentC from "./ComponentC";
import { createContext } from "react";
import { UserContext } from "./ComponentA";
import { useContext } from "react";

function ComponentB() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component B</h1>
      <p>Hi {user}</p>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
