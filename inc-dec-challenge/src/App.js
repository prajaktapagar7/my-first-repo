import React, { useState } from "react";

const App = () => {
  var number = 0;
  const [num, setNumber] = useState(number);
  const increment = () => {
    setNumber(num + 1);
  };
  const decrement = () => {
    num > 0 ? setNumber(num - 1) : alert("Sorry, zero limit reached");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <button onClick={increment}>Inc</button>
          <button onClick={decrement}>Dec</button>
        </div>
      </div>
    </>
  );
};
export default App;
