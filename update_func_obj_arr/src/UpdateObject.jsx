import { useState } from "react";

function UpdateObject() {
  const [car, setCar] = useState({
    model: "Mustang",
    year: 1999,
    make: "Ford",
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value })); // better for safe updates
  }
  function handleMakeChange(event) {
    setCar({ ...car, make: event.target.value });
  }
  function handleModelChange(event) {
    setCar({ ...car, model: event.target.value });
  }

  return (
    <div style={{ border: "2px solid black", margin: "2em" }}>
      <p>
        Your favorite car is: {car.model} {car.year}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
    </div>
  );
}

export default UpdateObject;
