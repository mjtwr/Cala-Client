import React from 'react'
import { Center, Box, useColorModeValue, Grid, GridItem} from '@chakra-ui/react'
import './styles.css'


const ProjectsTable = () => {
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
        <div>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>
        </div>
      </Box>
  </Center>
  )
}

export default ProjectsTable