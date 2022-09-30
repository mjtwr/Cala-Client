import React from 'react'
import { Center, Box, useColorModeValue, Grid, GridItem} from '@chakra-ui/react'


const ProjectsTable = (props) => {
  let projectsList = [
    {title: "mj", 
    description: "goal", 
    date:"10/20l", 
    user: "username", 
    id:1}, 
    {title: "mj", 
    description: "goal", 
    date:"10/20l", 
    user: "username", 
    id:2
  }]

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
          <h1 className='feature'>My Projects</h1>
        </div>
        <div>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          <GridItem w='100%' h='10'>Project</GridItem>
          <GridItem w='100%' h='10'>Goal</GridItem>
          <GridItem w='100%' h='10'>Created</GridItem>
          <GridItem w='100%' h='10'>User</GridItem>
          <GridItem w='100%' h='10'>Ops</GridItem>
        </Grid>
        <hr/>
        </div>
      {projectsList.map((props, i) => {
        return <div>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          <GridItem w='100%' h='10'>{props.title}</GridItem>
          <GridItem w='100%' h='10'>{props?.description}</GridItem>
          <GridItem w='100%' h='10'>{props.date}</GridItem>
          <GridItem w='100%' h='10'>{props.user}</GridItem>
          <GridItem w='100%' h='10'>{props.id}</GridItem>
        </Grid>
        <hr/>
        </div>
      })}
        
      </Box>
  </Center>
  
  )
}

export default ProjectsTable