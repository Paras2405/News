import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import News from './components/News';
import Navbar from './components/Navbar';

const App = () => {
  const [mode,setMode]=useState('light')
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#121212'
      document.getElementById("head").style.color='white'
    }
    else{
      setMode('light')
       document.body.style.backgroundColor='white'
        document.getElementById("head").style.color='black'

    }
   
  }
  return (
    <Router>
      <Navbar togglemode={togglemode} />
      <Routes>
        <Route path="/category/:category" element={<News mode={mode}  />} />
        <Route path="/" element={<News  mode={mode} />} />
      </Routes>
    </Router>
  );
};

export default App;
