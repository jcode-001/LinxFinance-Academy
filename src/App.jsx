import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.component";
import HeroSectionComponent from "./components/HeroSection.component";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Route path="/" element={} />
    <Route path="/" element={} />
    <Route path="/" element={} />
    <Route path="/" element={} /> */}
      </Router>
      <HeroSectionComponent />
    </div>
  );
};

export default App;
