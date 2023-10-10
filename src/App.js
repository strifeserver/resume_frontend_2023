import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import ProjectList from "./components/ProjectList";
import CreateProject from "./components/CreateProject";
import EditProject from "./components/EditProject";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">PROJECTS</Link>
            </li>
            <li>
              <Link to="/">ABOUT</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li>
            <li>
              <Link to="/create">Create Project</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/create" element={<CreateProject />} />
          <Route path="/" element={<ProjectList />} />
          <Route path="/edit-project/:id" element={<EditProject />} />
          {/* <Route path="/edit-project/:id" element={EditProject} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
