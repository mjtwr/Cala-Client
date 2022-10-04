import React from "react";
import ProjectsTable from "../components/ProjectsTable";
import { createProject, getAllProjects } from "../services/services";
import axios from "axios";
import { useEffect, useState } from "react";

const Projects = (props) => {
  // const { projectList } = props;

  console.log("PROJECTS PAGE PROPS", props);
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    // console.log("CALLING API");
    getAllProjects()
      .then((response) =>
        // {console.log(response.data)
        setProjectsList(response.data)
      )

      .catch((err) => console.log(err));
  }, []);

  //________________________________
  const handleDeleteProject = (id) => {
    // console.log("receiving id parent",id)

    let i = projectsList.findIndex((project) => project._id === id);
    // console.log(i)

    const left = projectsList.slice(0, i);
    const right = projectsList.slice(i + 1);
    setProjectsList(left.concat(right));
  };

  //________________________________

  return (
    <div>
      <ProjectsTable
        projectList={projectsList}
        handleDeleteProject={handleDeleteProject}
      />
      ;
    </div>
  );
};

export default Projects;
