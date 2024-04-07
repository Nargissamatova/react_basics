import Card from "./Card.jsx";
import students from "./students_data.jsx"; // import students array

function App() {
  return (
    <div className="app">
      {students.map(
        (
          student,
          index // index is built-in parameter in the map
        ) => (
          <Card key={index} student={student} /> // student is prop
        )
      )}
    </div>
  );
}

export default App;

/*
<Card city="Helsinki" student={student} />  for example I have some props (check Card.jsx)
*/
