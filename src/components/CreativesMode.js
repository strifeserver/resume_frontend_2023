import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function CreativesSection() {
  const [projects, setProjects] = useState([]);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
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

  const deleteData = (dataId) => {
    console.log(dataId);
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="grid  sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
        <div className="p-1 sm:col-span-12 md:col-span-12 md:col-start-1 lg:col-span-10 lg:col-start-2 xl:col-start-3  xl:col-span-8 introDataMain bg-white">
          <center>
            <span className="h2">Portfolio Creative Mode</span>
          </center>
          <span className="h2 m-2">Projects</span>
          <br />
          <br />
          <Link
            to={`/create-project/`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-1"
          >
           Create
          </Link>
          <br />
          <br />
          <div>
            <table className="min-w-full m-1">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-300 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 bg-gray-300 text-left textxs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                    Project Name
                  </th>
                  <th className="px-6 py-3 bg-gray-300 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                    Languages
                  </th>
                  <th className="px-6 py-3 bg-gray-300 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((project) => (
                  <tr key={project._id}>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                      {project.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                      {project.project_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                      {project.languages}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <Link
                        to={`/edit-project/${project._id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-1"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                      <button
                        onClick={() => deleteData(project._id)}
                        className="btnColorRed hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded m-1"
                        data-id={project._id}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <ul className="flex justify-center">
              {Array.from(
                { length: Math.ceil(projects.length / itemsPerPage) },
                (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-700"
                      } px-3 py-1 border border-gray-300 rounded-full mx-1 cursor-pointer`}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativesSection;
