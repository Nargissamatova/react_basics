function Card(props) {
  // You could simply use -> props.name, but props.student.name - a good practice to use specific property names when accessing props, as it makes the code more self-documenting and easier to understand.

  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="Student Image" />
      <h2>{props.student.name ? props.student.name : "Guest"}</h2>
      <p>{props.student.status}</p>
      <p>{props.student.description}</p>
    </div>
  );
}

export default Card;

/* I can pass both the student object and the city string to the Card component simultaneously by only one 'props'.
function Card(props) {
  const { student, city } = props;
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="Student Image" />
      <h2>{student.name ? student.name : "Guest"}</h2>
      <p>{student.status}</p>
      <p>{student.description}</p>
      <p>{city}</p>
    </div>
  );
}

*/
