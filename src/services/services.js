import axios from "axios";

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

// PROJECTS
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
// /projects/633775ca0d870e7cdfafdf83
export function updateProject(projectId) {
  return projectService
    .put(`/projects/${projectId}`, config)
    .then(successStatus)
    .catch(internalServerError);
}
export function deleteProject(projectId) {
  return projectService
    .delete(`/projects/${projectId}`, config)
    .then(successStatus)
    .catch(internalServerError);
}

// BACKLOG
///projects/projectId/backlogs
export function getBacklogTasks(projectId) {
  return projectService
    .get(`/projects/${projectId}/backlogs`, config)
    .then(successStatus)
    .catch(internalServerError);
}

// SPRINTS

// /sprints?projectId=633a5db299f8acab76adb830
export function getSprints(projectId) {
  // console.log("SEND REQUEST ID", projectId)
  return projectService
    .get(`/sprints?projectId=${projectId}`, config)
    .then(successStatus)
    .catch(internalServerError);
}
// /sprints
export function createSprint(sprint) {
  return projectService
    .post("/sprints", sprint, config)
    .then(successStatus)
    .catch(internalServerError);
}

// /sprints/sprintId
export function updateSprint(sprintId) {
  return projectService
    .put(`/sprints/${sprintId}`, config)
    .then(successStatus)
    .catch(internalServerError);
}
// /sprints/sprintId

export function deleteSprint(sprintId) {
  return projectService
    .delete(`/sprints/${sprintId}`, config)
    .then(successStatus)
    .catch(internalServerError);
}
// TASKS

// REVISAAAAAR
// /backlogs/backlogId/tasks
export function createTask(backlogId) {
  return projectService
    .post(`/backlogs/${backlogId}/tasks`, backlogId, config)
    .then(successStatus)
    .catch(internalServerError);
}

// /tasks/taskId
export function updateTask(taskId) {
  return projectService
    .put(`/tasks/${taskId}`, config)
    .then(successStatus)
    .catch(internalServerError);
}

//Update Sprint Task
// /sprints/633c6bcaaf609868ffca39ff/tasks?backlogId=633b31fb2bee9f56d96b71fc
export function updateSprintTask(sprintId, taskId) {
  return projectService
    .put(`/sprints/${sprintId}/tasks?backlogId=${taskId}`, config)
    .then(successStatus)
    .catch(internalServerError);
}

// /tasks/taskId
export function deleteTask(taskId) {
  return projectService
    .delete(`/tasks/${taskId}`, config)
    .then(successStatus)
    .catch(internalServerError);
}

//Move task from backlog to sprint
///sprints/633c6bcaaf609868ffca39ff/tasks?backlogId=633b31fb2bee9f56d96b71fc
export function moveTask(sprintId, backlogId) {
  return projectService
    .put(`/sprints/${sprintId}/tasks?backlogId=${backlogId}`, config) //Should be delete?
    .then(successStatus)
    .catch(internalServerError);
}

//Move task from sprint to backlog
// /sprints/633a6da8bb1e30a8befbae3b/tasks/633a6f3eed08f977eb4568cb?backlogId=633a5db299f8acab76adb832
export function moveTaskToBacklog(sprintId, backlogId) {
  return projectService
    .delete(`/sprints/${sprintId}/tasks?backlogId=${backlogId}`, config)
    .then(successStatus)
    .catch(internalServerError);
}
