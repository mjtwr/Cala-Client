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
import Welcome from "../components/Welcome";
import Feature from "../components/Feature";
import Testimonials from "../components/Testimonials";

export default function WelcomePage() {
  return (
    <div>
      <Welcome/>
      <Feature/>
      <Testimonials/>
    </div>
  );
}
