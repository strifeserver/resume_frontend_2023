// import React, { useState } from "react";
import React from "react";
// import axios from "axios";
import ProjectForm from "../components/reusables/ProjectForm";

function CreateProject() {
  return (
    <div>
      <h2>Add Project</h2>
      <ProjectForm mode="create" />

    </div>
  );
}

export default CreateProject;
