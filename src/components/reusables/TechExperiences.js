import React, { useEffect, useState } from "react";

function TechExperiences() {
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
    <div  >
      {/* Skill/Tech Section */}
        <div className="grid grid-cols-10 md:grid-cols-9 lg:grid-cols-10 xl:grid-cols-12 guide" >
          <div className="col-span-12">
            <p className="white-text ">Tech Experience:</p> <br></br>
          </div>
          {fileNames.map((fileName, index) => (
            <div key={index} className="col-span-10 md:col-span-4 lg:col-span-4 ">
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
  );
}

export default TechExperiences;
