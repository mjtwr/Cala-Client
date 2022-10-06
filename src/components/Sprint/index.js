import React, { useState } from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Task from "../Task";
import DeleteSprint from "../DeleteSprint";
import EditSprint from "../EditSprint";
import {deleteTask } from "../../services/services";
import "./styles.css";

const Sprint = (props) => {
  const {handleDeleteSprint} = props
  const [tasks, setTasks] = useState(props.sprint.tasks)

  const handleDeleteTask = (id) => {
    console.log("deleting task from sprint: ", id)
    deleteTask(id)
      .then((res) => {
        let i = tasks.findIndex((task) => task._id === id);
        const left = tasks.slice(0, i);
        const right = tasks.slice(i + 1);
        setTasks(left.concat(right));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="sprintCard">
      <Flex>
        <Box p="4">
          <div>
            <h1 className="feature">
              {props.sprint.title}: {props.sprint.status}
            </h1>
            <p>{props.sprint.description}</p>
          </div>
        </Box>
        <Spacer />
        <Box p="4" display="flex">
          <div>
            <EditSprint />
          </div>
          <div>
            <DeleteSprint
              sprintTitle={props.sprint.title}
              feature="sprint"
              sprintId={props.sprint._id}
              handleDeleteSprint={handleDeleteSprint}
            />
          </div>
        </Box>
      </Flex>
      {tasks.map((task, i) => {
        return (
          <div key={task._id}>
            <Task origin="sprint" task={task} color="white" handleDeleteTask={handleDeleteTask}/>
          </div>
        );
      })}
    </div>
  );
};

export default Sprint;
