import {
  Stack,
  Flex,
  Text,
  VStack,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import './styles.css'

export default function Welcome() {
  return (
    <Flex w={"100vh"} h={"90vh"} >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 2, md: 10 })}
        bgGradient={"linear(to-r, #E9D8FD, transparent)"}

      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading color="purple.700" size="4xl" justifyContent='left'>
            Welcome to Cala!
          </Heading>
          <Text justifyContent='left'
            color={"purple.700"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Lets's get started, and create your first project.
          </Text>
          <Text
            color={"purple.500"}
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
