import React, {useState} from 'react';


const App = () =>{
  let currTime = new Date().toLocaleTimeString();
  const [time, setTime] =useState(currTime);

  const UpdateTime = () =>{
    currTime = new Date().toLocaleTimeString();
    setTime(currTime)
  }
  setInterval(UpdateTime,1000);
  return(
    <>
      <h1>{time}</h1>
    </>
  );
}
export default App;