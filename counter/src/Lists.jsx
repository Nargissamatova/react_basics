// RENDER LISTS

function List(props) {
  const category = props.category;
  const itemList = props.items;

  // SORTING
  itemList.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
  itemList.sort((a, b) => a.calories - b.calories); // NUMERIC ORDER

  // FILTERING LOW CALORIES FRUITS
  const lowCalFruits = itemList.filter((item) => item.calories < 50);

  const listItem = lowCalFruits.map((lowCalfruit, index) => (
    <li key={index}>
      {lowCalfruit.name}: &nbsp; {lowCalfruit.calories}
    </li>
  ));
  return (
    <>
      <h3>{category}</h3>
      <ol>{listItem}</ol>
    </>
  );
}

export default List;
