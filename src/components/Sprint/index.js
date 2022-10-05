import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import Task from "../Task";
import DeleteSprint from "../DeleteSprint";
import EditSprint from "../EditSprint";

const Sprint = (props) => {
  // console.log("SPRINT PROPS", props);

  const handleDeleteSprint = (id) => {
    props.handleDeleteSprint(id);
  };

  return (
    <div className="backlogCard">
      <Flex>
        <Box p="4">
          <div>
            <h1 className="feature">{props.sprint.title}:      {props.sprint.status}</h1>
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
      {props.sprint.tasks.map((task, i) => {
        console.log("TASK SPRINT", task)
        return (
          <div>
            <Task origin="sprint" task={task} key={task._id} color="white" />
          </div>
        );
      })}
    </div>
  );
};

export default Sprint;
