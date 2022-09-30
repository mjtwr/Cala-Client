import React from 'react'
import Dashboard from '../components/Dashboard'
import {Center, Box, useColorModeValue} from '@chakra-ui/react'

const MainDashboard = () => {
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

    <Dashboard/>
    </Box>

    </Center>
  )
}

export default MainDashboard