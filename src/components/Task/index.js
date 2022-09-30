import React from "react";
import "./styles.css";
import {
  useColorModeValue,
  Center,
  Box,
  Select,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const Task = (props) => {
  const task = {
    type: "bug",
    title: "as a user i would like to blah blah blah",
    priority: "medium",
    user: "mike",
    id: "meklnl",
  };
  return (
    <Center py={2} width="100%">
      <div className="taskContent">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem w="100%" h="10">
            {task.type}
          </GridItem>
          <GridItem w="100%" h="10">
            {task.title}
          </GridItem>
          <GridItem w="100%" h="10">
            {" "}
            {task.priority}
          </GridItem>
          <GridItem w="100%" h="10">
            {task.user}
          </GridItem>
          <GridItem w="100%" h="10">
            OOO
          </GridItem>
        </Grid>
      </div>
    </Center>
  );
};

export default Task;
