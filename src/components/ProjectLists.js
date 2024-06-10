import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

function ProjectLists() {
  const [projects, setProjects] = useState([]);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("data/projects.json")
      // .get("http://localhost:5000/api/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  let keyCounter = 0;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 xl:grid-cols-12 white-text">
        <div
          className="p-4 sm:col-span-12 md:col-span-2 
        md:col-start-4 
        lg:col-span-12 
        lg:col-start-1 
        xl:col-start-2
        mr-5 
        introDataMain 
        "
        >
          <span className="h2 m-2">Projects</span>
          <p className="h3 m-3">
            These are my highlighted projects where I was primarily the main
            developer.
          </p>

          {currentItems.map((project, index) => {
            const isOdd = index % 2 === 0;
            return (
              <div
                key={project._id}
                className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 xl:grid-cols-12"
              >
                {isOdd ? (
                  <>
                    <div className="lg:col-start-1 lg:col-end-7 xl:col-start-1 xl:col-end-6 p-4 col-span-1">
                      <img
                        // src="/images/projects/thehub.png"
                        src={`/images/projects/${project.images}`}
                        alt="Project"
                        className="responsive-img"
                      />
                    </div>
                    <div className="lg:col-start-7 lg:col-end-13  xl:col-start-7 xl:col-end-12 p-4 col-span-3 ">
                      <p>Company: {project.company}</p>
                      <p><span className="project-name">{project.project_name}</span> </p>
                      <p> <span className="white-text">{project.project_description}</span></p>
                      <p>Techs: {project.techs}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="lg:col-start-1 lg:col-end-7 xl:col-start-1 xl:col-end-6 p-4 col-span-3 right-aligned-text ">
                      <p>Company: {project.company}</p>
                      <p><span className="project-name">{project.project_name}</span> </p>
                      <p> <span className="white-text">{project.project_description}</span> </p>
                      <p>Techs: {project.techs}</p>
                    </div>
                    <div className="lg:col-start-7 lg:col-end-13 xl:col-start-7 xl:col-end-12 p-4 col-span-1">
                      <img
                        src={`/images/projects/${project.images}`}
                        alt="Project"
                        className="responsive-img"
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}

          <br />
        </div>
      </div>
    </div>
  );
}

export default ProjectLists;
