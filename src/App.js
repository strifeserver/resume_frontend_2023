import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import 'output.css'; // Import the CSS file using the symlink

import Navigation from "./components/Navigation";
// import './dist/output.css'; // Import the CSS file
function App() {
  return (
    <Navigation/>
  );
}

export default App;
