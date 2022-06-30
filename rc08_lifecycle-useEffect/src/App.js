import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import Timer from "./components/Timer";
import UseEffectHook from "./components/UseEffectHook";
import Users from "./components/Users";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="container text-center mt-4">
      {/* <button className="btn btn-dark" onClick={() => setShow(!show)}>
        {!show ? "show" : "hide"}
      </button> */}
      {/* {show && <LifeCycleMethods />} */}
      {/* <Timer /> */}
      {/* {show && <UseEffectHook />} */}
      <Users />
    </div>
  );
}

export default App;
