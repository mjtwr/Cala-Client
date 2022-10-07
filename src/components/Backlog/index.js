import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Task from "../Task";
import "./styles.css";
import CreateTask from "../CreateTask";

const Backlog = (props) => {
  const { backlogTasksList, handleDeleteTask, sprintsList } = props;
  const handleCreateTask = (newTask) => {
    props.handleCreateTask(newTask);
  };

const handleMoveTask = ( task, id)=>{
props.handleMoveTask(task, id)
}

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
          <Box key={task._id}>
            <Task
              origin="backlog"
              task={task}
              color="white"
              handleDeleteTask={handleDeleteTask}
              sprintsList={sprintsList}
              handleMoveTask={handleMoveTask}
            />
          </Box>
        );
      })}
    </div>
  );
};

export default Backlog;
