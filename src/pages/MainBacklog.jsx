import React from "react";
import { useColorModeValue, Center, Box } from "@chakra-ui/react";
import Sprint from "../components/Sprint";
import Backlog from "../components/Backlog";
import {
  createSprint,
  getBacklogTasks,
  createTask,
  getSprints,
  deleteSprint,
} from "../services/services";
import { useEffect, useState } from "react";
import NewSprint from "../components/NewSprint";

const MainBacklog = (props) => {
  console.log("MAIN BACKLOG IS RECEIVING:", props);
  const [backlogTasksList, setBacklogTasksList] = useState([]);
  const [sprintsList, setSprintsList] = useState([]);

  useEffect(() => {
    console.log("CALLING API");
    getSprints("633b31fb2bee9f56d96b71fa")
      .then((response) => {
        // console.log("RESPONSE SPRINT", response.data);
        setSprintsList(response.data.sprints);
      })
      .catch((err) => console.log(err));

    getBacklogTasks("633b31fb2bee9f56d96b71fa")
      .then((response) => {
        console.log("RESPONSE GET BACKLOG TASKS", response.data);
        setBacklogTasksList(response.data.tasks);
      })

      .catch((err) => console.log(err));
  }, []);

  //HANDLES
  const handleCreateSprint = (sprint) => {
    sprint.project = "633b31fb2bee9f56d96b71fa";
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

  const handleCreateTask = (task) => {
    createTask(task)
      .then((res) => {
        let newBacklogTasksList = [...backlogTasksList];
        newBacklogTasksList.push(res.data);

        console.log("newBacklogTasksList", newBacklogTasksList);
        setBacklogTasksList(newBacklogTasksList);
      })
      .catch((err) => console.log(err));
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
        <Box p="4" display="flex">
          <div>
            <NewSprint handleCreateSprint={handleCreateSprint} />
          </div>
        </Box>
        {sprintsList.map((sprint, i) => {
          console.log("SPRINT HAR", sprint);
          return (
            <div>
            <span>Sprint Id {sprint._id}</span>
              <Sprint
                sprint={sprint}
                key={sprint._id}
                handleDeleteSprint={handleDeleteSprint}
              />
              <br />
            </div>
          );
        })}
        <Backlog
          backlogTasksList={backlogTasksList}
          handleCreateTask={handleCreateTask}
        />
      </Box>
    </Center>
  );
};

export default MainBacklog;
