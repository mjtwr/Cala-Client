import React from "react";
import {  Box, Flex, Spacer, Button } from "@chakra-ui/react";
import Task from "../Task";
import './styles.css'
import { FiPlus } from "react-icons/fi";


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
            <Button
              className="button__submit"
              size="lg"
              type="submit"
              rightIcon={<FiPlus />}
              colorScheme="purple"
              variant="outline"
            >
              Task
            </Button>
          </div>
        </Box>
      </Flex>
     
      {tasks.map((task, i) => {
        return (
          <div>
            <Task origin='backlog' />
            {/* DELETE TASK FROM ORIGIN DETERMINED BY QUERY */}
            <span>{`/tasks/${task._id}&origin=backlog`}</span>

          </div>
        );
      })}
    </div>
  );
};

export default Backlog;
