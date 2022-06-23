import Msg from "./Msg";
import Person from "./Person";

function App() {
  return (
    <>
      <Person
        name="anthony"
        tel="035"
        img="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490__340.jpg"
      />
      <Person
        name="augustus"
        tel="05"
        img="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-female-employee-posing-in-office-picture-id1318858332?b=1&k=20&m=1318858332&s=170667a&w=0&h=Y5ftO74WtXOrMEl8WkNhVjwbNah6gYFsrrvWJGF-tcQ="
      />
      <Person
        name="caesar"
        tel="03"
        img="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
      />
    </>
  );
}

export default App;
