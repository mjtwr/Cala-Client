import React from "react";
import {  Box, Flex, Spacer } from "@chakra-ui/react";
import Task from "../Task";
import './styles.css'
import CreateTask from "../CreateTask";


const Backlog = () => {
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
     <Flex mt='20px'>
        <Box p="4" mr='60px'>
          <div>
            <h1 className="feature">Backlog</h1>
          </div>
        </Box>
        <Spacer />
        <Box p="4">
          <div>
            <CreateTask/>
          </div>
        </Box>
      </Flex>
     
      {tasks.map((task, i) => {
        return (
          <div>
            <Task origin='backlog' key={task.id}/>
            {/* DELETE TASK FROM ORIGIN DETERMINED BY QUERY */}

          </div>
        );
      })}
    </div>
  );
};

export default Backlog;
