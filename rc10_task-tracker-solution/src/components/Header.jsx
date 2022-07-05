import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: "show add task bar",
    bgColor: "purple",
  });

  //! React, default olarak state'leri hemen degistirmeyebilir.
  //! Ekstra render'lari azaltmak icin state'leri toplu (batch) bir sekilde gunceller.
  //! Bir event handler icerisindeki ardasik state'ler event bitiminde toplu bir
  //! sekilde guncellenmis olur.State'lerin guncelenmesi gelis sirasina gorere yapilir.
  //! Ayni event icerisinde birbirine bagli state'leri kullanirken buna dikkat etmek gerkir.

  //? https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates

  const handleShow = (tasks) => {
    if (!show) {
      setBtnStyle({
        name: "hide add task bar",
        bgColor: "red",
      });
    } else {
      setBtnStyle({
        name: "show add task bar",
        bgColor: "purple",
      });
    }
    setShow(!show);
  };

  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button
        onClick={handleShow}
        className="btn"
        style={{ backgroundColor: btnStyle.bgColor }}
      >
        {btnStyle.name}
      </button>
      {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </header>
  );
};
export default Header;
