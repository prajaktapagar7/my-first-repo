import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import {Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/*' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
