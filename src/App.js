import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Routes instead of Route and Switch
import AboutPage from './AboutPage';
import Home from './Home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/event" element={<AboutPage />} />
        </Routes>
    </Router>
  );
}

export default App;
