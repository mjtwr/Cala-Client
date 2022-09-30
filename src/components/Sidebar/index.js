import React, {useState} from 'react'
import { Flex, Divider, Heading, Text , Avatar,IconButton} from '@chakra-ui/react'
import { FiGrid,FiHome,FiTrello,FiList,FiMenu } from "react-icons/fi";
import NavItem from '../NavItem.js';
import { Link } from 'react-router-dom';



const Sidebar = (props) => {
    const [navSize, changeNavSize] = useState("large")
  return (
    <Flex post="sticky" left="5" h="80vh" 
    boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)" 
    borderRadius={navSize === "small" ? "15px" : "30px"}
    w={navSize === "small" ? "75px" : "200px"} 
    flexDir="column" 
    justify-content="space-between">
        <Flex p="5%" flexDir="column" alignItems={navSize === "small" ? "center" : "flex-start"} as="nav">
            <IconButton background="none" mt={5} _hover={{background:'none'}}
                icon={ <FiMenu/>} onClick={()=>{
                    if (navSize === "small")
                        changeNavSize("large")
                        else changeNavSize("small")
                }}
            />
            <Link to={"/projects"} className="authLink" color='purple'>
                <NavItem navSize={navSize} icon={FiHome} title="My Projects"/>
            </Link>
            <Link to={"/dashboard"} className="authLink">
                <NavItem navSize={navSize} icon={FiGrid} title="Dashboard"/>
            </Link>
            <Link to={"/backlog"} className="authLink">
                <NavItem navSize={navSize} icon={FiList} title="Backlog"/>
            </Link> 
            <Link to={"/pipeline"} className="authLink">
                <NavItem navSize={navSize} icon={FiTrello} title="Pipeline"/>
            </Link>
        </Flex>
        <Flex p="5%" flexDir="column" w="100%" alignItems={navSize === "small" ? "center" : "flex-start"} mb={4}>
                <Divider display={navSize === "small" ? "none" : "flex"}/>
                <Flex mt={4} align="center">
                    <Avatar size="sm"/>
                    <Flex flexDir="column" ml={4}  display={navSize === "small" ? "none" : "flex"}>
                        <Link to={"/profile"} className="authLink">
                            <Heading as="h3" color="#553C9A" size="sm">{props?.user?.username}</Heading>
                            <Text color="#9F7AEA">Scrum Master</Text>
                        </Link>
                    </Flex>
                </Flex>
         </Flex>
       
    </Flex>
  )
}

export default Sidebar