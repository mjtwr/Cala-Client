import { ReactElement } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import FeatureCard from "../FeatureCard";




export default function SimpleThreeColumns() {
  return (
    <Box p={4} m={10}>
    <Heading color='purple.700'>Features</Heading>
        <FeatureCard/>
    </Box>
  );
}
