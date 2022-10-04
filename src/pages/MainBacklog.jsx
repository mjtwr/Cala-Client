import React from "react";
import { useColorModeValue, Center, Box } from "@chakra-ui/react";
import Sprint from "../components/Sprint";
import Backlog from "../components/Backlog";
import { getBacklogTasks, getSprints } from "../services/services";
import { useEffect, useState } from "react";

const MainBacklog = () => {
  const [backlogTasksList, setBacklogTasksList] = useState([]);
  const [sprintsList, setSprintsList] = useState([]);

  useEffect(() => {
    console.log("CALLING API");
    getSprints("633b31fb2bee9f56d96b71fa")
      .then((response) => {
        console.log("RESPONSE SPRINT", response.data);
        setSprintsList(response.data.sprints);
      })

      .catch((err) => console.log(err));

    getBacklogTasks("633b31fb2bee9f56d96b71fa")
      .then((response) => {
        // console.log("RESPONSE BACKLOG", response.data);
        setBacklogTasksList(response.data.tasks);
      })

      .catch((err) => console.log(err));
  }
  , []);

  

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
      {sprintsList.map((sprint, i)=>{
        return(
          <div>
          <Sprint sprintTasksList={sprint.tasks}/>
          <br/>
          </div>
        )
      })}
       <Backlog backlogTasksList={backlogTasksList} />
      </Box>
    </Center>
  );
};

export default MainBacklog;
