import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import Task from "../Task";
import { FiPlus } from "react-icons/fi";
import CreateSprint from "../CreateSprint";

const Sprint = () => {
  const tasks = [
    {
      type: "bug",
      title: "as a user i would like to blah blah blah",
      priority: "medium",
      user: "Pam",
      id: "meklnl",
    },
    {
      type: "Bug",
      title: "as a user i would like to blah blah blah",
      priority: "high",
      user: "mike",
      id: "Oscar",
    },
    {
      type: "UserStory",
      title: "as a user i would like to blah blah blah",
      priority: "medium",
      user: "Jim",
      id: "meklnl",
    },
    {
      type: "Task",
      title: "as a user i would like to blah blah blah",
      priority: "low",
      user: "Angela",
      id: "meklnl",
    },
    {
      type: "Bug",
      title: "as a user i would like to sleep",
      priority: "high",
      user: "Michael",
      id: "meklnl",
    },
    {
      type: "buUserStoryg",
      title: "as a user i would like to blah blah blah",
      priority: "low",
      user: "charles",
      id: "meklnl",
    },
  ];
  return (
    <div className="backlogCard">
      <Flex>
        <Box p="4">
          <div>
            <h1 className="feature">Sprint</h1>
          </div>
        </Box>
        <Spacer />
        <Box p="4">
          <div>
           <CreateSprint/>
          </div>
        </Box>
      </Flex>
      {tasks.map((task, i) => {
        return (
          <div>
            <Task origin="sprint" key={task.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Sprint;
