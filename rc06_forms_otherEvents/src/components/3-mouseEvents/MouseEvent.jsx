import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaEvernote } from "react-icons/fa";

const MouseEvent = () => {
  const [visible, isVisible] = useState(false);

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseEnter={() => isVisible(true)}
        onMouseLeave={() => isVisible(false)}
      >
        todo item 1 <FaReact />
      </div>
      {visible && <p>Shh this is a secret</p>}

      <div id="todo-2" className="bg-success text-light w-50 p-4 mt-4">
        todo item 2 <FaEvernote />
      </div>

      <div id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        todo item 3 <FaReact />
      </div>

      <p>X and Y</p>
      {/* <p className="text-danger fw-bold">
        {coordX} {coordY}
      </p> */}
    </div>
  );
};

export default MouseEvent;
