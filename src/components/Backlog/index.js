import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Task from "../Task";
import "./styles.css";
import CreateTask from "../CreateTask";

const Backlog = (props) => {
  console.log("BACKLOG PROPS HENDLE DELETE ++ (+NEW ARRAY):", props);
  const { backlogTasksList, handleDeleteTask } = props;
  const handleCreateTask = (newTask) => {
    console.log(
      "NEW TASK: Backlog is receiving props from createTask",
      newTask
    );
    props.handleCreateTask(newTask);
  };
  // const handleDeleteTask = (id) =>{
  //   console.log("delete task from backlog", id)
  // }

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
          <div key={task._id}>
            <Task origin="backlog"  task={task} color="white" handleDeleteTask={handleDeleteTask}/>
            {/* DELETE TASK FROM ORIGIN DETERMINED BY QUERY */}
          </div>
        );
      })}
    </div>
  );
};

export default Backlog;
