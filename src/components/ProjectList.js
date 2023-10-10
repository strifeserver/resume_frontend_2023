import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import the Link component

function ProjectList() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      // axios.get("/data/projects.json")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div>
      <h2>Project List</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <strong>{project.project_name}</strong>:{" "}
            {project.project_description}
            {/* Add a Link to the Edit Project page */}
            <Link to={`/edit-project/${project._id}`}>Edit</Link>
            {/* <Link to={`/edit-project/${project._id}`}>Edit</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
