import React, { useState } from "react";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import Sidebar from "../components/Sidebar";
import { Grid, GridItem, Flex} from '@chakra-ui/react'
import Profile from "./Profile";
import { Outlet } from "react-router-dom";

const MainPage = (props) => {
  return (
    // {
    //     user &&  <Flex> <Sidebar/> </Flex>
    //   }
  
   <Flex>
    <Sidebar {...props}/>
    <h1>Chaparrito I💖u</h1>
    <Flex w="1000px">
      <Outlet />
    </Flex>
   </Flex>
   
  )
}

export default MainPage