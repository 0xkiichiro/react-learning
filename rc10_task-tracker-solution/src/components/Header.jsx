import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button className="btn" onClick={handleShow}>
        show add task bar
      </button>
      <AddTaskForm />
    </header>
  );
};

export default Header;
