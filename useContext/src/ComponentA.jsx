import ComponentB from "./ComponentB";
import { useState, createContext } from "react";

export const UserContext = createContext();
function ComponentA() {
  const [user, setUser] = useState("Nargis");
  return (
    <div className="box">
      <h1>Component A</h1>
      <UserContext.Provider value={user}>
        <ComponentB name={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
