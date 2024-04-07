// RENDER LISTS

function List() {
  const fruits = [
    { name: "apple", calories: 52 },
    { name: "banana", calories: 89 },
    { name: "orange", calories: 47 },
    { name: "strawberry", calories: 33 },
    { name: "grape", calories: 69 },
    { name: "watermelon", calories: 30 },
    { name: "pineapple", calories: 50 },
    { name: "kiwi", calories: 61 },
    { name: "mango", calories: 60 },
    { name: "peach", calories: 39 },
  ];

  // SORTING
  fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
  fruits.sort((a, b) => a.calories - b.calories); // NUMERIC ORDER

  // FILTERING LOW CALORIES FRUITS
  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 50);

  const listItem = lowCalFruits.map((lowCalfruit, index) => (
    <li key={index}>
      {lowCalfruit.name}: &nbsp; {lowCalfruit.calories}
    </li>
  ));
  return <ol>{listItem}</ol>;
}

export default List;
