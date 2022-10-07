import React from "react";
import ProjectsTable from "../components/ProjectsTable";
import {
  createProject,
  getAllProjects,
  deleteProject,
} from "../services/services";
import { useEffect, useState } from "react";
import { updateProject } from "../services/services";

const Projects = (props) => {
  console.log("PROPS", props)
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    getAllProjects()
      .then((response) => setProjectsList(response.data))
      .catch((err) => console.log(err));
  }, []);

  //________________________________
  const handleDeleteProject = (id) => {
    deleteProject(id)
      .then((res) => {
        let i = projectsList.findIndex((project) => project._id === id);
        // console.log(i)
        const left = projectsList.slice(0, i);
        const right = projectsList.slice(i + 1);
        setProjectsList(left.concat(right));
      })
      .then(() => console.log("Project deleted"))
      .catch((err) => console.log(err));
  };

  const handleCreateProject = (project) => {
    let newProject = { title: project.title, description: project.description };
    createProject(newProject)
      .then((res) => {
        let newProjectList = [...projectsList];
        newProjectList.push(res.data);
        setProjectsList(newProjectList);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateProject = (project) => {
    console.log("udpate project: ", project);
    updateProject(project)
      .then((res) => {
        let newProjectList = [...projectsList];
        for (let i = 0; i < newProjectList.length; i++) {
          if (newProjectList[i]._id === project._id) {
            newProjectList[i].title = project.title;
            newProjectList[i].description = project.description;
          }
        }
        setProjectsList(newProjectList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ProjectsTable
        projectList={projectsList}
        handleDeleteProject={handleDeleteProject}
        handleCreateProject={handleCreateProject}
        handleUpdateProject={handleUpdateProject}
      />
      
    </div>
  );
};

export default Projects;
