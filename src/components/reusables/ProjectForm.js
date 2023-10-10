import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

function ProjectForm({ mode = "create", data = {} }) {
  const [projectName, setProjectName] = useState(data.projectName || "");
  const [projectDescription, setProjectDescription] = useState(data.projectDescription || "");
  const [languages, setLanguages] = useState(data.languages || "");
  const [orderBy, setOrderBy] = useState(data.orderBy || 0);
  const [company, setCompany] = useState(data.company || "");

  // Use useEffect to update state variables when data prop changes
  useEffect(() => {
    setProjectName(data.projectName || "");
    setProjectDescription(data.projectDescription || "");
    setLanguages(data.languages || "");
    setOrderBy(data.orderBy || 0);
    setCompany(data.company || "");
  }, [data]);

  console.log('Loading Data', data)
  console.log(data.projectName)

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      project_name: projectName,
      project_description: projectDescription,
      languages,
      order_by: parseInt(orderBy), // Convert orderBy to an integer
      company,
    };

    try {
      if (mode === "create") {
        // Axios POST request for creating a new project
        const response = await axios.post(
          "http://localhost:5000/api/projects",
          formData
        );
        console.log("Project created successfully:", response.data);
      } else if (mode === "edit") {

        // Axios PUT request for updating an existing project
        console.log('FORM DATA',formData)
        const response = await axios.put(
          `http://localhost:5000/api/projects/${data.id}`,
          formData
        );
        console.log("Project updated successfully:", response.data);
      }

      // Call the onSubmit function (if provided)
      // if (onSubmit) {
      //   onSubmit();
      // }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="languages">Languages:</label>
          <input
            type="text"
            id="languages"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="orderBy">Order By:</label>
          <input
            type="number"
            id="orderBy"
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProjectForm;
