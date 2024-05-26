import React, { useEffect, useState } from "react";
import TechExperiences from "../components/reusables/TechExperiences";
import axios from "axios";
import { Link } from "react-router-dom"; // Import the Link component

function AboutMeSection() {
  //   const [projects, setProjects] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/api/projects")
  //       // axios.get("/data/projects.json")
  //       .then((response) => {
  //         setProjects(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching projects:", error);
  //       });
  //   }, []);

  const name_container = {
    height: "175px",
    width: "50px",
    backgroundColor: "#fe4652",
    textAlign: "center",
    position: "absolute",
  };

  // List of file names
  const fileNames = [
    "php.svg",
    "laravel.svg",
    "mysql.svg", // Example file names
    "html.svg",
    "javascript.svg",
    "jquery.svg",
    "react.svg",
    "git.svg",
    "vscode.svg",
    "shopify API.svg",
    "line api.svg",
    "chatgpt.svg",
    "godaddy.svg",
    // Add more file names here as needed
  ];

  return (
    <div>
      <div
        class="grid 
      md:grid-rows-3 

      md:grid-cols-12 
      md:grid-cols-12 
      lg:grid-cols-12 

      grid-flow-col 
      gap-4  "
      >
        <div class="sm:row-span-3 md:row-span-3 lg:row-span-3 sm:col-span-1 md:col-span-6 mainProfilePicture">
          {/* <img src="images/portrait2.png" alt="Sample Image" class="  "></img> */}
        </div>

        <div
          class="
        grid 
        sm:grid-rows-8 
        md:grid-rows-4 
        lg:grid-rows-3 
        

        sm:col-span-8
        md:col-span-5
        "
        >
          <div className="introDataSection ">
            <div className="mt-2 " style={name_container}>
              <p className="mt-3 single-letter-name">J</p>
              <p className="single-letter-name">E</p>
              <p className="single-letter-name">A</p>
              <p className="single-letter-name">N</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-4 sm:row-span-4 md:grid-cols-12 ">
            <div className="md:col-span-12 lg:col-span-12 xl:col-span-8 ml-3 mt-5 .">
              <p className="red-bold-text">Hello I'm Jean-Louis Mendoza</p>
              <p className="white-text">Web Developer</p>

              <span className="gray-text">
                Innovative, task-driven professional with 5+ years of experience
                in web development with a strong emphasis on "Progressive
                Enhancement", as I look for creative ways to push the boundaries
                of website without compromise.
              </span>
            </div>
          </div>
        </div>
        {/* Skill/Tech Section */}
        <div class="md:row-span-2 col-span-5 mt-1 " >
          <TechExperiences />
        </div>
        {/* Skill/Tech Section */}
      </div>

      <div
        className="grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-6 xl:grid-cols-6 gap-4"
        hidden
      >
        <div className="p-4 sm:col-span-1 md:col-span-2 md:col-start-2 lg:col-start-1 lg:col-span-3 xl:col-span-3 mainProfilePicture guide"></div>

        <div className="p-4 sm:col-span-12 md:col-span-6 md:col-start-7 lg:col-span-3 lg:col-start-4  xl:col-span-3 mr-5  guide">
          <div className="introDataSection introDataMain ">
            <div className="mt-2 " style={name_container}>
              <p className="mt-3 single-letter-name">J</p>
              <p className="single-letter-name">E</p>
              <p className="single-letter-name">A</p>
              <p className="single-letter-name">N</p>
            </div>
          </div>

          <div className="grid grid-cols-12 guide">
            <div className="md:col-span-12 lg:col-span-9 xl:col-span-8 ml-3 mt-5 .">
              <p className="red-bold-text">Hello I'm Jean-Louis Mendoza</p>
              <p className="white-text">Web Developer</p>

              <span className="gray-text">
                Innovative, task-driven professional with 5+ years of experience
                in web development with a strong emphasis on "Progressive
                Enhancement", as I look for creative ways to push the boundaries
                of website without compromise.
              </span>
            </div>
          </div>

          {/* Skill/Tech Section */}
          <div className="grid md:grid-cols-12 lg:grid-cols-5 xl:grid-cols-4 mt-10 guide hidden">
            <div className="md:col-span-12 lg:col-span-7 xl:col-span-4 mt-10 ">
              <p className="white-text ">Tech Experience:</p> <br></br>
            </div>
            {fileNames.map((fileName, index) => (
              <div
                key={index}
                className="md:col-span-4 lg:col-span-2 xl:col-span-1 "
              >
                <button className="btn btn--light " key={index}>
                  <span className="btn__innerCustom ">
                    <span className="btn__content flex items-center justify-center ">
                      <div className="flex flex-col contentItems">
                        <div className="grid grid-cols-8 ">
                          <div className="col-start-1 col-end-5 ">
                            <img
                              src={`/images/skills/${fileName}`}
                              className="skillSize"
                              alt={fileName}
                            />
                          </div>
                          <div className="col-start-7 col-end-8 btn__content flex items-center justify-center  ">
                            <span className="skilltext white-text">
                              {fileName.split(".")[0]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </div>
          {/* Skill/Tech Section */}
        </div>
        <div
          className="p-4 
        sm:col-span-12 md:col-span-8  lg:col-span-3 
        lg:col-start-3 md:col-start-5 xl:col-start-3 xl:col-span-3 
        
        mr-5 
        tech-section
         "
        >
          {/* Skill/Tech Section */}
          <div className="grid md:grid-cols-12 lg:grid-cols-5 xl:grid-cols-4 ">
            <div className="md:col-span-12 lg:col-span-7 xl:col-span-4">
              <p className="white-text ">Tech Experience:</p> <br></br>
            </div>
            {fileNames.map((fileName, index) => (
              <div
                key={index}
                className="md:col-span-4 lg:col-span-2 xl:col-span-1 "
              >
                <button className="btn btn--light " key={index}>
                  <span className="btn__innerCustom ">
                    <span className="btn__content flex items-center justify-center ">
                      <div className="flex flex-col contentItems">
                        <div className="grid grid-cols-8 ">
                          <div className="col-start-1 col-end-5 ">
                            <img
                              src={`/images/skills/${fileName}`}
                              className="skillSize"
                              alt={fileName}
                            />
                          </div>
                          <div className="col-start-7 col-end-8 btn__content flex items-center justify-center  ">
                            <span className="skilltext white-text">
                              {fileName.split(".")[0]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </div>
          {/* Skill/Tech Section */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 xl:grid-cols-12 gap-4 stats">
        <div className="p-6 sm:col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3 mr-5 xl:col-start-3 ">
          <div className="btnContainer ">
            <button className="btn btn--light ">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content flex items-center justify-center ">
                  <div className="flex flex-col contentItems">
                    <p>06 / Freelance</p>
                    <p>05 / Corporate</p>
                    <p>Clients</p>
                  </div>
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="p-6 sm:col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-3 mr-5 ">
          <div className="btnContainer ">
            <button className="btn ">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content flex items-center justify-center ">
                  <div className="flex flex-col contentItems">
                    <p>05</p>
                    <p>Years</p>
                    <p>Experience</p>
                  </div>
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="p-6 sm:col-span-12 md:col-span-2 lg:col-span-4 xl:col-span-4 mr-5 ">
          <div className="btnContainer ">
            <button className="btn btn--light ">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content flex items-center justify-center ">
                  <div className="flex flex-col contentItems">
                    <p>13</p>
                    <p>Projects</p>
                    <p>Handled</p>
                  </div>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
