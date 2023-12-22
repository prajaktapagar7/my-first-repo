import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    document.title = `You Clicked Me ${num}`;
  }, [num]);
  const updateNum = () => {
    setNum(num + 1);
  };
  return (
    <>
      <button onClick={updateNum}>Click me {num}</button>
    </>
  );
};
export default App;
