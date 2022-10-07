import React from "react";
import "./styles.css";
import { Grid, GridItem, IconButton, Flex } from "@chakra-ui/react";
import EditTask from "../EditTask";
import DeleteTask from "../DeleteTask";
import { Tag } from "@chakra-ui/react";
import FilterProject from "../FilterProject";
import { FiArrowUp } from "react-icons/fi";

const Task = (props) => {
  const { task, color, handleDeleteTask, sprintsList, origin } = props;
  const prioritiesColors = {
    high: "red",
    medium: "orange",
    low: "green",
    "": "gray",
  };
  const statusColor = {
    done: "green",
    inprogress: "blue",
    todo: "gray",
  };
  const handleChange = (id) => {
    props.handleMoveTask(task, id);
  };
  return (
    <div className="taskContent">
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem w="100%">{task?.type}</GridItem>
        <GridItem w="100%">{task?.title}</GridItem>
        <GridItem w="100%">
          <Tag colorScheme={prioritiesColors[task?.priority]}>
            {task?.priority}
          </Tag>
        </GridItem>
        <GridItem w="100%">
          <Tag colorScheme={statusColor[task?.status]}>{task?.status}</Tag>
        </GridItem>
        <GridItem w="100%">
          {origin === "backlog" ? (
            <Flex>
              <div>
                <FilterProject
                  projectsList={sprintsList}
                  handleChange={handleChange}
                />
              </div>
              <div>
                <IconButton
                  variant="outline"
                  colorScheme="purple"
                  aria-label="Call Sage"
                  size="sm"
                  icon={<FiArrowUp />}
                />
              </div>
            </Flex>
          ) : (
            <span></span>
          )}
        </GridItem>
        <GridItem w="100%" className="options-btn">
          <EditTask color={color} />
          <DeleteTask
            color={color}
            feature="task"
            taskId={task._id}
            handleDeleteTask={handleDeleteTask}
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Task;
