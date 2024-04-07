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

  const listItem = fruits.map((fruit, index) => (
    <li key={index}>{fruit.name}</li>
  ));
  return <ol>{listItem}</ol>;
}

export default List;
