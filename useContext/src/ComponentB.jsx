import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className="box">
      <h1>Component B</h1>
      <p>{name}</p>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
