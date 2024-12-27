import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/News';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/category/:category" element={<News />} />
        <Route path="/" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;
