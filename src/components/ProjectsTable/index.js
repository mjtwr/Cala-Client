import React from "react";
import {
  Center, Spacer, 
  Box, Flex, 
  useColorModeValue,
  Grid,
  GridItem, useDisclosure,

} from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import axios from "axios";
import CreateProject from "../CreateProject";
import EditTask from "../EditTask";
import DeletePopUp from "../DeletePopUp";

const ProjectsTable = (props) => {
  console.log("PROJECTTABLE PROPS", props)
  const { projectList } = props;
  // const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Flex>
        <Box p="4">
          <div>
            <h1 className="feature">My Projects</h1>
          </div>
        </Box>
        <Spacer />
        <Box p="4">
          <div>
           <CreateProject/>
          </div>
        </Box>
      </Flex>
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
                  {project.createdAt}
                </GridItem>
                <GridItem w="100%" h="12">
                  {project.user}
                </GridItem>
                <GridItem w="100%" h="12" className="options-btn" >
                  <EditTask color-bg='white'/>
                  <DeletePopUp feature='project' color-bg='white'/>
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
