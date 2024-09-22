import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Assistance from './pages/Assistance';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assistance" element={<Assistance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
