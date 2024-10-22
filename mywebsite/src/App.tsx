import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Resume from './components/Resume';
function App(): React.ReactElement {
  return (
    <div className='main'>
      <Navbar/>
      <Home/>
    </div>
  );
}


export default App;
