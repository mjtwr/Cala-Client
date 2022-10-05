import React from "react";
import "./styles.css";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import EditTask from "../EditTask";
import DeleteTask from "../DeleteTask";

const Task = (props) => {
  const { task, color, handleDeleteTask } = props;

  return (
    <Center py={2} width="100%">
      <div className="taskContent">
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
          <GridItem w="100%" h="20">
            {task?.type}
          </GridItem>
          <GridItem w="100%" h="20">
            {task?.title}
          </GridItem>
          <GridItem w="100%" h="20">
            {" "}
            {task?.priority}
          </GridItem>
          <GridItem w="100%" h="20">
            {" "}
            {task?.status}
          </GridItem>
          <GridItem w="100%" h="20">
            {task?.user}
          </GridItem>
          <GridItem w="100%" h="20" className="options-btn">
            <EditTask color={color} />
            <DeleteTask color={color} feature="task" taskId={task._id} handleDeleteTask={handleDeleteTask}/>
          </GridItem>
        </Grid>
      </div>
    </Center>
  );
};

export default Task;
