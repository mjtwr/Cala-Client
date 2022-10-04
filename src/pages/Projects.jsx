import React from "react";
import ProjectsTable from "../components/ProjectsTable";
import { createProject, getAllProjects } from "../services/services";
import axios from 'axios'
import { useEffect, useState } from "react";


const Projects = (props) => {
  

  useEffect(() => {
    console.log("CALLING API");
   getAllProjects()
    .then(response =>  
      {console.log(response.data)
        setProjectsList(response.data)})
   
    .catch(err => console.log(err))
  }, []);

const [projectsList, setProjectsList] = useState([])

  console.log(props);
  return <div>

    <ProjectsTable projectList={projectsList} />;
  </div>
};

export default Projects;
