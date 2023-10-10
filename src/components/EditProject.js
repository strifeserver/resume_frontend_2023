import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectForm from "../components/reusables/ProjectForm";
import { useParams } from "react-router-dom"; // Import useParams

function EditProject() {
  const { id } = useParams(); // Access the project ID from the URL

  const [projectData, setProjectData] = useState({
    id: "",
    projectName: "",
    projectDescription: "",
    languages: "",
    orderBy: 0,
    company: "",
  });



  useEffect(() => {
    // Fetch the project data based on the ID from the URL
    axios
      .get(`http://localhost:5000/api/projects/${id}`)
      .then((response) => {
        const fetchedProjectData = response.data;
        setProjectData({
          id: id,
          projectName: fetchedProjectData.project_name,
          projectDescription: fetchedProjectData.project_description,
          languages: fetchedProjectData.languages,
          orderBy: fetchedProjectData.order_by,
          company: fetchedProjectData.company,
        });
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
      });
  }, [id]);



  return (
    <div>
      <h2>Update Project</h2>
      <ProjectForm mode="edit" data={projectData} />
    </div>
  );
}

export default EditProject;
