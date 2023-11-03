import React, { useEffect, useState } from "react";
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
  
  const nickNameStyle = {
    fontWeight: "bold",
    fontSize: "30px",
    color: "white",
    marginBottom: "-15px",
  };
  
  const textColor = {
    color: "white", // This sets the text color
  };
  
  const textColorRed = {
    color: "#fe4652", // This sets the text color
    fontWeight: "bold",
  };
  
  const textColorGrey = {
    color: "#9e9e9e", // This sets the text color
  };



  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-4 ">
          <div className="p-4 sm:col-span-12 md:col-span-2 lg:col-start-1 lg:col-span-2 xl:col-span-3 mainProfilePicture "></div>

          <div className="p-4 sm:col-span-12 md:col-span-2 md:col-start-4 lg:col-span-3 lg:col-start-4  xl:col-span-2 mr-5 introDataMain">
            <div className="introDataSection">
              <div className="mt-2" style={name_container}>
                <p className="mt-3" style={nickNameStyle}>
                  J
                </p>
                <p style={nickNameStyle}>E</p>
                <p style={nickNameStyle}>A</p>
                <p style={nickNameStyle}>N</p>
              </div>
            </div>

            <div className="col-start-2 col-end-12 ml-3 mt-5">
              <p className="textColorRed" style={textColorRed}>
                Hello Im Jean-Louis Mendoza
              </p>
              <p style={textColor}>Web Developer</p>

              <span style={textColorGrey}>
                Innovative, task-driven professional with 3+ years of experience
                in web development with a strong emphasis on "Progressive
                Enhancement", as I look for creative ways to push the boundaries
                of website without compromise
              </span>
            </div>
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
                      <p>06/Freelance</p>
                      <p>05/Corporate</p>
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
