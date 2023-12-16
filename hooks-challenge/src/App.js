import React, { useState } from "react";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const[time,setTime]=useState(newTime);
  const UpdateTime = () =>{
    newTime=new Date().toLocaleTimeString();
    setTime(newTime);
    console.log("clicked ", time);
  }
  return(
  <>
    <h1>{time}</h1>
    <button onClick={UpdateTime}>Get the time</button>
  </>
  );
}

export default App;