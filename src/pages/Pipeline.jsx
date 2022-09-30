import React from "react";
import PipelineCard from '../components/PipelineCard'
import { useColorModeValue, Center, Box } from '@chakra-ui/react'


const Pipeline = () => {
  return (
    <Center py={8} width="100%">
    <Box
        role={'group'}
        p={3} ml="0px" mr='30px'
        height='100%'
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>

    <PipelineCard/>
    <PipelineCard/>
    <PipelineCard/>
    <PipelineCard/>
    </Box>

    </Center>
  )
}

export default Pipeline;
