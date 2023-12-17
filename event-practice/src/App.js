import React, { useState } from "react";
const App = () => {
  const [bg, setBg] = useState({
    color: "purple",
    msg: "Hi Praju",
  });
  const [color,msg]=bg;
  const bgChange = () => {
    setBg(() => {
      return {
        color: "pink",
        msg: "Welcome to React",
      };
    });
  };
  const bgBack = () => {
    setBg(() => {
      return {
        color: "purple",
        msg: "Hi Praju",
      };
    });
  };
  return (
    <>
      <div style={{ backgroundColor: color, textAlign: "center" }}>
        <button
          style={{ fontSize: "larger" }}
          onClick={bgChange}
          onDoubleClick={bgBack}
        >
          {msg}
        </button>
      </div>
    </>
  );
};
export default App;
