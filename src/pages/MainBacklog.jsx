import React from "react";
import { useColorModeValue, Center, Box } from "@chakra-ui/react";
import Sprint from "../components/Sprint";
import Backlog from "../components/Backlog";
import { getBacklogTasks } from "../services/services";
import { useEffect, useState } from "react";

const MainBacklog = () => {
  useEffect(() => {
    console.log("CALLING API");
    getBacklogTasks("633b31fb2bee9f56d96b71fa")
      .then((response) => {
        console.log("RESPONSE BACKLOG", response.data);
        setBacklogTasksList(response.data);
      })

      .catch((err) => console.log(err));
  }, []);

  const [backlogTasksList, setBacklogTasksList] = useState([]);

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
        <Sprint />
        <Backlog backlogTasksList={backlogTasksList} />
      </Box>
    </Center>
  );
};

export default MainBacklog;
