import React from "react";
import {
  Box,
  Flex,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="backlogCard" w="70%">
      <Flex>
        <Box p="4">
          <div>
            <h1 className="feature">Backlog Summary</h1>
          </div>
          <Flex>
            <InputGroup ml="60px" w="200px">
              <InputLeftElement
                pointerEvents="none"
                children={<FiSearch color="gray.300" />}
              />
              <Input type="tel" placeholder="Filter by Project" />
            </InputGroup>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Dashboard;
