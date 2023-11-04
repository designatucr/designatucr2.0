import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Route and Switch
import AboutPage from "./AboutPage";
import Home from "./Home";
import Contact from "./Contact";
import Construction from "./Construction";
import "./AboutPage.css";
import "./Contact.css";
import "./Events.css";
import "./Construction.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
