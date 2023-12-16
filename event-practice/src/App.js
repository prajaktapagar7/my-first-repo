import React, {useState} from 'react';
const App = () => {
  const [bg, setBg] = useState('purple');
  const [name, setName] = useState('Hi Praju');
  const bgChange = () =>{
    setBg("pink");
    setName("Welcome to React");
  }
  const bgBack = () =>{
    setBg("purple");
    setName("Hi Praju");
  }
  return(
    <>
     <div style={{backgroundColor : bg, textAlign : "center"}}>
      <button style={{fontSize : "larger"}} onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
     </div>
    </>
  );
}
export default App;
