function Card(props) {
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
