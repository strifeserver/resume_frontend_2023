import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./output.css"; // Import the CSS file using the symlink

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CreateProject from "./components/CreateProject"; // Import the CreateProject component
import CreativesSection from "./components/CreativesMode"; // Import the CreateProject component
import EditProject from "./components/EditProject"; // Import the CreateProject component
// ... import other components as needed

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/projects" element={<CreativesSection />} />
          <Route path="/edit-project/:id" element={<EditProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
