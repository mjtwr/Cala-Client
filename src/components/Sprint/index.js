import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import Task from "../Task";
import { FiPlus } from "react-icons/fi";
import DeleteSprint from "../DeleteSprint";
import EditSprint from "../EditSprint";

const Sprint = (props) => {
  // console.log("SPRINT PROPS", props)
const {sprintTasksList} = props


  return (
    <div className="backlogCard">
      <Flex>
        <Box p="4">
          <div>
            <h1 className="feature">Sprint</h1>
          </div>
        </Box>
       <Spacer />
        <Box p="4" display='flex'>
          <div>
          <EditSprint/>
           </div><div>
           <DeleteSprint />
          </div>
        </Box>
      </Flex>
      {sprintTasksList.map((task, i) => {
        return (
          <div>
          {/* <h1>Sprint {task.title}</h1> */}
            <Task origin="sprint" task={task} key={task._id} color='white'/>
          </div>
        );
      })}
    </div>
  );
};

export default Sprint;
