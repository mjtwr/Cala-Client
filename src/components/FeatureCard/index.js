import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const FeatureCard = () => {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        m="0px 10px 0px 0px"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Text
            color={"purple.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            BACKLOG
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            The definitive task list
          </Heading>
          <Text color={"gray.500"}>
            A product backlog is a prioritized list of work for the development
            team derived from the roadmap and its requirements.
          </Text>
        </Stack>
        <Stack mt={6} direction={"column"} spacing={4} align={"center"}>
          <Avatar size='xl'
            src={"https://cdn-icons-png.flaticon.com/512/7792/7792148.png"}
            alt={"Author"}
          />
        </Stack>
      </Box>
      <Box
        maxW={"445px"}
        w={"full"} h='100%'
        m="0px 10px 0px 0px"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Text
            color={"purple.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            PIPELINE
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            A simple way to keep track
          </Heading>
          <Text color={"gray.500"}>
           
An agile project management tool designed to help visualize work, limit work in progress, and maximize efficiency (or flow).
          </Text>
        </Stack>
        <Stack mt={6} direction={"column"} spacing={4} align={"center"}>
          <Avatar size='xl'
            src={"https://cdn-icons-png.flaticon.com/512/5265/5265605.png"}
            alt={"Author"}
          />
        </Stack>
      </Box>
      <Box
        maxW={"445px"}
        w={"full"} h='100%'
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Text
            color={"purple.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            SPRINTS
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            Plan and execute your sprints
          </Heading>
          <Text color={"gray.500"}>
          Define what can be delivered in the next sprint and how that work is going to get done.
          </Text>
        </Stack>
        <Stack mt={6} direction={"column"} spacing={4} align={"center"}>
          <Avatar size='xl'
            src={"https://cdn-icons-png.flaticon.com/512/5265/5265589.png"}
            alt={"Author"}
          />
        </Stack>
      </Box>
    </Center>
  );
};

export default FeatureCard;
