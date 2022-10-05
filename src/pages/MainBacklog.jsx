import React, { useEffect, useState } from "react";
import { useColorModeValue, Center, Box } from "@chakra-ui/react";
import Sprint from "../components/Sprint";
import Backlog from "../components/Backlog";
import {
  createSprint,
  getBacklogTasks,
  createTask,
  getSprints,
  deleteSprint,
  getAllProjects,
} from "../services/services";
import NewSprint from "../components/NewSprint";
import FilterProject from "../components/FilterProject";

const MainBacklog = (props) => {
  // console.log("MAIN BACKLOG IS RECEIVING:", props);
  const [backlogTasksList, setBacklogTasksList] = useState([]);
  const [sprintsList, setSprintsList] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [projectId, setProjectId] = useState(null);
  const [backlogId, setBacklogId] = useState('');
  // let backlogId = ''

  const getProjectData = () => {
    getSprints(projectId)
      .then((response) => {
        // console.log("RESPONSE SPRINT", response.data);
        setSprintsList(response.data.sprints);
      })
      .catch((err) => console.log(err));

    getBacklogTasks(projectId)
      .then((response) => {
        // console.log("RESPONSE GET BACKLOG TASKS", response.data);
        setBacklogId(response.data._id) 
        // console.log("BL ID====>", backlogId)
        setBacklogTasksList(response.data.tasks);
      })

      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllProjects()
      .then((response) => setProjectsList(response.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (projectId) {
      getProjectData();
    }
  }, [projectId]);

  //HANDLES
  const handleCreateSprint = (sprint) => {
    sprint.project = projectId;
    // console.log("SENDING REQ", sprint);
    createSprint(sprint)
      .then((res) => {
        // console.log("REEES", res);
        let newSprintsList = [...sprintsList];
        newSprintsList.push(res.data);
        console.log("nSLnEJRNV;BEJQVL'RNV", newSprintsList);
        setSprintsList(newSprintsList);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteSprint = (id) => {
    // console.log("got sprint id from Modal: ", id);
    deleteSprint(id)
      .then((res) => {
        let i = sprintsList.findIndex((sprint) => sprint._id === id);
        const left = sprintsList.slice(0, i);
        const right = sprintsList.slice(i + 1);
        setSprintsList(left.concat(right));
      })
      .then(() => console.log("Sprint deleted"))
      .catch((err) => console.log(err));
  };
  //enviar el backlogId
  const handleCreateTask = (task) => {
    createTask(backlogId, task)
    
      .then((res) => {
        console.log("RES CREATE BLtask",res)
        let newBacklogTasksList = [...backlogTasksList];
        newBacklogTasksList.push(res.data);

        console.log("newBacklogTasksList", newBacklogTasksList);
        setBacklogTasksList(newBacklogTasksList);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (idProject) => {
    console.log("IDPROJECT", idProject);
    setProjectId(idProject);
  };
  return (
    <Center py={8} width="100%">
      <Box
        role={"group"}
        p={3}
        ml="0px"
        mr="30px"
        height="100%"
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box p="4" display='flex' flexDir='column'>
        <div className="subtitle">
          Select your Project
        </div>
          <div >
            <FilterProject 
              projectsList={projectsList}
              handleChange={handleChange}
            />
          </div>
        </Box>
        <Box p="4" display="flex">
          <div>
            {projectId && <NewSprint handleCreateSprint={handleCreateSprint} />}
          </div>
        </Box>
        {sprintsList.map((sprint, i) => {
          return (
            <div key={sprint._id}>
              <Sprint sprint={sprint} handleDeleteSprint={handleDeleteSprint} />
              <br />
            </div>
          );
        })}
        {projectId && (
          <Backlog
            backlogTasksList={backlogTasksList}
            handleCreateTask={handleCreateTask}
          />
        )}
      </Box>
    </Center>
  );
};

export default MainBacklog;
