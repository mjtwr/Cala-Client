import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";

// here we are just maing our code look more DRY. With every backend call we must deal with errors and success states. The idea of creating these kinds of services is to make our lives easier in the components
function internalServerError(err) {
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}
const config = {
  headers: {
    Authorization: "6338a553b914e3d1746942f1",
  },
};

// creates a basic url for every request in this file
const projectService = axios.create({
  baseURL: `http://localhost:5005/`,
});

export function createProject(project) {
  return projectService
    .post("/projects", project, config)
    .then(successStatus)
    .catch(internalServerError);
}
export function getAllProjects() {
  return projectService
    .get("/projects", config)
    .then(successStatus)
    .catch(internalServerError);
}

///projects/projectId/backlogs
export function getBacklogTasks(projectId) {
  return projectService
    .get(`/projects/${projectId}/backlogs`, config)
    .then(successStatus)
    .catch(internalServerError);
}
