import Card from "./Card.jsx";
import students from "./students_data.jsx"; // import students array

function App() {
  return (
    <div>
      {students.map((student, index) => (
        <Card key={index} student={student} />
      ))}
    </div>
  );
}

export default App;

/*
<Card city="Helsinki" student={student} />  for example I have some props (check Card.jsx)
*/
