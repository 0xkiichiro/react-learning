import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputData, setInputData] = useState("");

  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    e.target.value = e.target.value.toLocaleUpperCase();
    e.keyCode === 13 && alert("pressing enter is cheat");
  };

  const handleAreaPaste = (e) => {
    e.target.value = e.clipboardData.getData("text").toLocaleLowerCase();
    e.target.style.border = "3px solid yellow";
    e.target.style.backgroundColor = "lightcoral";
    //! we cancel the copy/paste on browsers default
    e.preventDefault();
  };

  const handleAreaChange = (e) => {
    if (!e.target.value) {
      e.target.style.border = "1px solid black";
      e.target.style.backgroundColor = "transparent";
    }
  };

  return (
    <div className="container text-center">
      <h2>Clipboard Events</h2>
      <input
        type="text"
        onChange={(e) => setInputData(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <p className="text-start m-4" onCopy={() => alert("Copied!")}>
        {inputData}
      </p>

      <textarea
        name="area"
        id="area"
        cols="50"
        rows="10"
        onPaste={handleAreaPaste}
        onChange={handleAreaChange}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
