import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { addUser, updateUser } from "./utils/functions";
import { ToastContainer } from "react-toastify";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      updateUser(info);
    } else {
      addUser(info);
    }
    setInfo(initialValues);
  };

  const handleEdit = (id, userName, phoneNumber, gender) => {
    setInfo({ id, userName, phoneNumber, gender });
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
      <Contacts handleEdit={handleEdit} />
      <ToastContainer />
    </div>
  );
}

export default App;
