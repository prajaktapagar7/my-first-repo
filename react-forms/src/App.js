import React, {useState} from 'react';

const App = () =>{
  const [name, setName]= useState("");
  const [fName, setFName]= useState();
  const InputEvent = (event) => {
    setName(event.target.value);
  }
  const OnSubmit = () => {
    setFName(name)
  }
  return(
    <>
      <h1>Hello {fName}</h1>
      <input type="text" placeholder='Enter Your Name' value={name} onChange={InputEvent}/>
      <button onClick={OnSubmit}>Submit</button>
      {/* This is controlled component where formdata is handled by react component */}
    </>
  );
}
export default App;