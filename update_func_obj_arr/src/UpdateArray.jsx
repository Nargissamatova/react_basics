import { useState } from "react";

function UpdateArray() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    // spread operator
    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    // Filter all elements where current i(index) does not equal the index that we receive
    // setFoods(foods.filter((element, i) => i !== index)); element is ignored, so undescore is used

    //creates a new array that includes all elements of foods except the one at the specified index.
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}

export default UpdateArray;
