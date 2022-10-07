import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const Profile = (props) => {
  return (
    <Center py={6} w={"full"}>
      <Box
        w={"70%"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://img.freepik.com/vector-gratis/fondo-abstracto-aurora-boreal-tonos-morados_23-2148273711.jpg?w=1380&t=st=1665102447~exp=1665103047~hmac=58bd1284fcfd4b4dd47ab9d9f56416676ba41ddd6990d6f46d4b07e271e4879c"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xxl"}
            src={"https://bit.ly/broken-link"}
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {props.user.username}
            </Heading>
            <Text color={"gray.500"}>Scrum Master</Text>
          </Stack>

          {/* <Stack direction={"row"} justify={"center"} spacing={6} mb={5}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}># of projects</Text>
              {/* useEffect para recibir los datos */}
          {/* <Text fontSize={"sm"} color={"gray.500"}>
                Projects
              </Text>
            </Stack>
          </Stack>  */}
          {/* <Stack direction={"row"} justify={"center"} spacing={6} mb={5}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}># of Sprints</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Sprints
              </Text>
            </Stack>
          </Stack> */}
          {/* <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>Enrollment Date</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Joined Cala
              </Text>
            </Stack>
          </Stack> */}
          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#6B46C1", "gray.900")}
            color={"#E9D8FD"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Update
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default Profile;
