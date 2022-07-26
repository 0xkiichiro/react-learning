import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  //! useRef first usage: capturing DOM elements
  const inputRef = useRef(null);
  const divRef = useRef();
  const valueRef = useRef(0);
  const [value, setValue] = useState(0);

  const changeBgColor = () => {
    divRef.current.style.backgroundColor = "orange";
    // const colors = [
    //   "orange",
    //   "pink",
    //   "purple",
    //   "red",
    //   "#00ff00",
    //   "rgb(150,150,150)",
    // ];
    // const random = Math.trunc(Math.random() * colors.length);
    // divRef.current.style.backgroundColor = colors[random];
    divRef.current.style.backgroundColor = inputRef.current.value;
  };

  const increase = () => {
    // setValue(value + 1)
    valueRef.current += 1;
  };
  console.log(value);

  //! useRef second usage: creating objects
  console.log("valueRef", valueRef);
  useEffect(() => {
    // console.log(document.querySelector("input"));
    // document.querySelector("input").focus();
    // console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input ref={inputRef} type="text" />
      <button className="" onClick={changeBgColor}>
        Change BG Color
      </button>
      <button className="" onClick={increase}>
        Increase Value
      </button>
    </div>
  );
};

export default UseRefComponent;
