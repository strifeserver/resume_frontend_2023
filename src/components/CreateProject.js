// import React, { useState } from "react";
import React from "react";
// import axios from "axios";
import ProjectForm from "../components/reusables/ProjectForm";

function CreateProject() {
  // const [projectName, setProjectName] = useState("");
  // const [projectDescription, setProjectDescription] = useState("");
  // const [languages, setLanguages] = useState("");
  // const [orderBy, setOrderBy] = useState(0);
  // const [company, setCompany] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // // Create a new project
  //   // axios.post("http://localhost:5000/api/projects", {
  //   //   project_name: projectName,
  //   //   project_description: projectDescription,
  //   //   languages: languages,
  //   //   order_by: orderBy,
  //   //   company: company,
  //   // })
  //   //   .then((response) => {
  //   //     console.log("Project created:", response.data);
  //   //     // Optionally, you can redirect or update the project list here.
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error creating project:", error);
  //   //   });
  // };

  return (
    <div>
      <h2>Create Project</h2>
      <ProjectForm mode="create" />

    </div>
  );
}

export default CreateProject;
