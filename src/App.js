import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './output.css'; // Import the CSS file using the symlink

import Navigation from "./components/Navigation";
import Content from "./components/Content";
// import './dist/output.css'; // Import the CSS file
function App() {
  return (
    <div>
      <Navigation/>
      <Content/>
    </div>


    
  );
}

export default App;
