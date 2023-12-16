import React, { useState } from "react";

const App = () => {
  var date = new Date();
  var currentTime = date.getHours()+ ":" +date.getMinutes()+ ":" +date.getSeconds();
  const[time,setTime]=useState(currentTime);
  const CurrTime = () =>{
    setTime(currentTime);
  }
  return(
  <>
    <h1>{time}</h1>
    <button onClick={CurrTime}>Get the time</button>
  </>
  );
}

export default App;