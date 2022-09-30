import React from 'react'
import { useColorModeValue, Center, Box } from '@chakra-ui/react'
import Sprint from '../components/Sprint'
import Backlog from '../components/Backlog'


const MainBacklog = () => {
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

    <Sprint/>
    <Backlog/>
    </Box>

    </Center>
  )
}

export default MainBacklog