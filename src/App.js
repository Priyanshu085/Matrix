import React from 'react'
import Navbar from './component/Navbar'
import Login from './component/Login'
import About from './component/About'
import Featurepage from './component/Featurepage'
//import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <> 
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Login />}/>
          <Route exact path="About" element={<About/>} />
          <Route exact path="Featurepage" element={<Featurepage/>} />
      </Routes>
    </>
  )
}   

export default App;