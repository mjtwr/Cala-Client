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
const api = axios.create({
  baseURL: `http://localhost:5005/`,
});
api.defaults.headers.common["Authorization"] = USER_HELPERS.getUserToken();

// PROJECTS
export function createProject(project) {
  return api
    .post("/projects", project)
    .then(successStatus)
    .catch(internalServerError);
}

export function getAllProjects() {
  return api.get("/projects").then(successStatus).catch(internalServerError);
}

// /projects/633775ca0d870e7cdfafdf83
export function updateProject(project) {
  return api
    .put(`/projects/${project._id}`, {title: project.title, description: project.description})
    .then(successStatus)
    .catch(internalServerError);
}

export function deleteProject(projectId) {
  return api
    .delete(`/projects/${projectId}`)
    .then(successStatus)
    .catch(internalServerError);
}

// BACKLOG
///projects/projectId/backlogs
export function getBacklogTasks(projectId) {
  return api
    .get(`/projects/${projectId}/backlogs`)
    .then(successStatus)
    .catch(internalServerError);
}

// SPRINTS
// /sprints?projectId=633a5db299f8acab76adb830
export function getSprints(projectId) {
  return api
    .get(`/sprints?projectId=${projectId}`)
    .then(successStatus)
    .catch(internalServerError);
}
// /sprints
export function createSprint(sprint) {
  return api
    .post("/sprints", sprint)
    .then(successStatus)
    .catch(internalServerError);
}

// /sprints/sprintId
export function updateSprint(sprintId) {
  return api
    .put(`/sprints/${sprintId}`)
    .then(successStatus)
    .catch(internalServerError);
}
// /sprints/sprintId

export function deleteSprint(sprintId) {
  return api
    .delete(`/sprints/${sprintId}`)
    .then(successStatus)
    .catch(internalServerError);
}
// TASKS

// /backlogs/backlogId/tasks
export function createTask(backlogId, task) {
  return api
    .post(`/backlogs/${backlogId}/tasks`, task)
    .then(successStatus)
    .catch(internalServerError);
}

// /tasks/taskId
export function updateTask(taskId) {
  return api
    .put(`/tasks/${taskId}`)
    .then(successStatus)
    .catch(internalServerError);
}

//Update Sprint Task
// /sprints/633c6bcaaf609868ffca39ff/tasks?backlogId=633b31fb2bee9f56d96b71fc
export function updateSprintTask(sprintId, taskId) {
  return api
    .put(`/sprints/${sprintId}/tasks?backlogId=${taskId}`)
    .then(successStatus)
    .catch(internalServerError);
}

// /tasks/taskId
export function deleteTask(taskId) {
  return api
    .delete(`/tasks/${taskId}`)
    .then(successStatus)
    .catch(internalServerError);
}

//Move task from backlog to sprint
///sprints/633c6bcaaf609868ffca39ff/tasks?backlogId=633b31fb2bee9f56d96b71fc
export function moveTask(sprintId, backlogId) {
  return api
    .put(`/sprints/${sprintId}/tasks?backlogId=${backlogId}`)
    .then(successStatus)
    .catch(internalServerError);
}

//Move task from sprint to backlog
// /sprints/633a6da8bb1e30a8befbae3b/tasks/633a6f3eed08f977eb4568cb?backlogId=633a5db299f8acab76adb832
export function moveTaskToBacklog(sprintId, backlogId) {
  return api
    .delete(`/sprints/${sprintId}/tasks?backlogId=${backlogId}`)
    .then(successStatus)
    .catch(internalServerError);
}
