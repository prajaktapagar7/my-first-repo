import React from 'react';
import {Route, Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import User from './User';
import Search from './Search';

const App = () =>{
  return(
    <>
    <Menu/>
    <Routes>
      <Route path= '/' element={<About/>}/>
      <Route path= '/contact' element={<Contact/>}/>
      <Route path= '/service' element={<Service/>}/>
      <Route path= '/search' element={<Search/>}/>
      <Route path= '/user/:fName/:lName' element={<User/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
    </>
  );
}
export default App;