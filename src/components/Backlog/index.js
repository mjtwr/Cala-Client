import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Task from "../Task";
import "./styles.css";
import CreateTask from "../CreateTask";

const Backlog = (props) => {
  console.log("BACKLOG PROPS (+NEW ARRAY):", props);
  const { backlogTasksList } = props;
  const handleCreateTask = (newTask) => {
    console.log(
      "NEW TASK: Backlog is receiving props from createTask",
      newTask
    );
    props.handleCreateTask(newTask);
  };

  return (
    <div className="backlogCard">
      <Flex mt="20px">
        <Box p="4" mr="60px">
          <div>
            <h1 className="feature">Backlog</h1>
          </div>
        </Box>
        <Spacer />
        <Box p="4">
          <div>
            <CreateTask handleCreateTask={handleCreateTask} />
          </div>
        </Box>
      </Flex>

      {backlogTasksList.map((task, i) => {
        return (
          <div>
            <Task origin="backlog" key={task._id} task={task} color="white" />
            {/* DELETE TASK FROM ORIGIN DETERMINED BY QUERY */}
          </div>
        );
      })}
    </div>
  );
};

export default Backlog;
