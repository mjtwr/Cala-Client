import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    Heading,
    useBreakpointValue,
    Link,
  } from "@chakra-ui/react";
  
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
              the agile methodology
            </Text>
            <Stack direction={"row"}>
              <Link to="/auth/signup"></Link>
              <Button
                bg={"#553C9A"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "purple.500" }}
              >
                SignUp
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "purple.500" }}
              >
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }
  