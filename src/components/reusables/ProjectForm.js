import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import Swal from "sweetalert2";

function ProjectForm({ mode = "create", data = {} }) {
  const [projectName, setProjectName] = useState(data.projectName || "");
  const [projectDescription, setProjectDescription] = useState(
    data.projectDescription || ""
  );
  const [languages, setLanguages] = useState(data.languages || "");
  const [orderBy, setOrderBy] = useState(data.orderBy || 0);
  const [company, setCompany] = useState(data.company || "");

  // Use useEffect to update state variables when data prop changes
  useEffect(() => {
    if (mode != "create") {
      setProjectName(data.projectName || "");
      setProjectDescription(data.projectDescription || "");
      setLanguages(data.languages || "");
      setOrderBy(data.orderBy || 0);
      setCompany(data.company || "");
    }
  }, [data]);

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
    let message = '';

    try {
      if (mode === "create") {
        const response = await axios.post(
          "http://localhost:5000/api/projects",
          formData
        );
        message = 'Project Successfully Created';
      } else if (mode === "edit") {
        // Axios PUT request for updating an existing project
        console.log("FORM DATA", formData);
        const response = await axios.put(
          `http://localhost:5000/api/projects/${data.id}`,
          formData
        );
        message = 'Project Successfully Updated';

      }

      Swal.showLoading();
      Swal.fire({
        title: "Success",
        html: message,
        icon: "success",
      }).then(() => {
        window.location.href = "/projects";
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>

      <div className="grid  sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">

        <div className="p-1 sm:col-span-12 md:col-span-12 md:col-start-1 lg:col-span-10 lg:col-start-2 xl:col-start-3  xl:col-span-8 introDataMain bg-white">
        <span className="h2 p-5">{mode.toUpperCase()} Project</span>
          
          <form onSubmit={handleSubmit} className="p-5">
            <div>
              <label htmlFor="projectName">Project Name:</label>
              <input
                type="text"
                id="projectName"
                value={projectName}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="projectDescription">Project Description:</label>
              <textarea
                id="projectDescription"
                value={projectDescription}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="languages">Languages:</label>
              <input
                type="text"
                id="languages"
                value={languages}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
                onChange={(e) => setLanguages(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="orderBy">Order By:</label>
              <input
                type="number"
                id="orderBy"
                value={orderBy}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
                onChange={(e) => setOrderBy(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                value={company}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <button className="bg-blue-700 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-1">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;
