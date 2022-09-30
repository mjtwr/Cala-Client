import React from "react";
import {Flex,Text,Icon,Link,Menu,MenuButton,MenuList} from '@chakra-ui/react'

const NavItem = (props) => {
    const {navSize, title, icon} = props
  return (
    <Flex mt="30" flexDir="column" w="100%" 
    alignItems={navSize === "small" ? "center" : "flex-start"}
    >
        <Menu placement="right">
            <Link p={3} borderRadius={8} _hover={{textDecor: "none", backgroundColor: "#E9D8FD"}}
            w={navSize === "small" ? "center"  : "flex-start"}>
                <MenuButton w="100%">
                    <Flex>
                        <Icon as={icon} fontSize="xl" />
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                    </Flex>
                </MenuButton>
            </Link>
        </Menu>
    </Flex>
  )
}

export default NavItem