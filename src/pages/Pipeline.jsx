import React from "react";
import PipelineCard from "../components/PipelineCard";
import { useColorModeValue, Center, Box } from "@chakra-ui/react";

const Pipeline = (props) => {
  const cards = [{title: "TO-DO", id:1}, {title: "In Progress", id:2},{title: "Testing", id:3},{title: "Done", id:4}]
  return (
    <Center py={8} width="100%">
        <Box
          p={3}
          ml="0px"
          mr="30px"
          height="100%"
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
        >
      {cards.map((card, i)=>{
        return <div className="pipelineCards">
          <PipelineCard />
         </div>
      })}
      
        </Box>
     
    </Center>
  );
};

export default Pipeline;
