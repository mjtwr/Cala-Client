import React from "react";
import {
  Center,
  Box,
  useColorModeValue,
  Grid,
  GridItem,
  IconButton,
} from "@chakra-ui/react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectsTable = (props) => {
  const { projectList } = props;

  return (
    <Center py={8} width="100%">
      <Box
        role={"group"}
        p={3}
        ml="0px"
        mr="30px"
        height="100%"
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <div>
          <h1 className="feature">My Projects</h1>
        </div>
        <div>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem w="100%" h="10" className="subtitle-grey">
              Project
            </GridItem>
            <GridItem w="100%" h="10" className="subtitle-grey">
              Goal
            </GridItem>
            <GridItem w="100%" h="10" className="subtitle-grey">
              Created
            </GridItem>
            <GridItem w="100%" h="10" className="subtitle-grey">
              User
            </GridItem>
            <GridItem w="100%" h="10" className="subtitle-grey"></GridItem>
          </Grid>
          <hr />
        </div>
        {projectList.map((project, i) => {
          return (
            <div className="projectList" key={project._id}>
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <GridItem w="100%" h="10">
                  {project.title}
                </GridItem>
                <GridItem w="100%" h="15">
                  {project?.description}
                </GridItem>
                <GridItem w="100%" h="12">
                  {project.date}
                </GridItem>
                <GridItem w="100%" h="12">
                  {project.user}
                </GridItem>
                <GridItem w="100%" h="12">
                  <IconButton
                    aria-label="Edit"
                    backgroundColor="#FAF5FF"
                    icon={<FiEdit />}
                  />
                  <IconButton
                    color="red"
                    backgroundColor="#FAF5FF"
                    aria-label="Delete"
                    icon={<FiTrash2 />}
                  />
                </GridItem>
              </Grid>
              <hr />
            </div>
          );
        })}
      </Box>
    </Center>
  );
};

export default ProjectsTable;
