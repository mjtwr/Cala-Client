import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://3back.com/app/uploads/2017/07/Team-scaled.jpg)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading color="white" size="4xl">
            Become THE Scrum Master
          </Heading>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Become a part of our community of Scrum Masters that are reinventing
            the world
          </Text>
          <Stack direction={"row"}>
            <Link to={"/auth/signup"}>
              <Button
                bg={"#44337A"}
                color={"white"}
                _hover={{ bg: "purple.500" }}
              >
                SignUp
              </Button>
            </Link>
            <Link to={"/auth/login"}>
              <Button
                bg={"whiteAlpha.300"}
                color={"white"}
                _hover={{ bg: "purple.500" }}
              >
                LogIn
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
