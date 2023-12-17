import React, { useState } from "react";
const App = () => {
  const [bg, setBg] = useState({
    color: "purple",
    msg: "Hi Praju",
  });
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
      <div style={{ backgroundColor: bg.color, textAlign: "center" }}>
        <button
          style={{ fontSize: "larger" }}
          onClick={bgChange}
          onDoubleClick={bgBack}
        >
          {bg.msg}
        </button>
      </div>
    </>
  );
};
export default App;
