import React from 'react'
import './styles.css'
import { Center,  Grid, GridItem} from '@chakra-ui/react'
import { FiMoreHorizontal } from "react-icons/fi";

const Task = (props) => {
    
    const task ={ type: 'bug', title:'as a user i would like to blah blah blah', priority: 'medium', user:'mike', id:'meklnl'}
    return (

    <Center py={2} width="100%">
            <div className='taskContent'>
                    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem w='100%' h='20'>{task.type}</GridItem>
                    <GridItem w='100%' h='20'>{task.title}</GridItem>
                    <GridItem w='100%' h='20'> {task.priority}</GridItem>
                    <GridItem w='100%' h='20'>{task.user}</GridItem>
                    <GridItem w='100%' h='20' icon={FiMoreHorizontal}>OOO-{props.origin}</GridItem>
                    </Grid>
            </div>
            
    </Center>
   
  )
}

export default Task