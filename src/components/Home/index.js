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
    <Flex w={"full"} h={"100vh"}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading color="white" size="4xl">
            Welcome to Cala!
          </Heading>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Lets's get started, and create our first project.
          </Text>
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            On your left you'll find the navigation bar, let's go to My
            Projects...and have fun!
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
