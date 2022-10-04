import React from "react";
import { Flex, Box, Spacer, Button ,IconButton} from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";
import Task from "../Task";

const PipelineCard = () => {
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
            <h1 className="feature">TO-DO</h1>
          </div>
        </Box>
        <Spacer />
        <Box p="4">
          <div>
            <IconButton
              colorScheme="purple"
              variant='outline'
              aria-label="Call Segun"
              size="sm"
              icon={<FiMoreHorizontal />}
            />
          </div>
        </Box>
      </Flex>
      {tasks.map((task, i) => {
        return (
          <div>
            <Task />
          </div>
        );
      })}
    </div>
  );
};
export default PipelineCard;
