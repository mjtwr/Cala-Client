import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="backlogCard" w="70%">
      <Flex>
        <Box p="4">
          <div>
            <h1 className="feature">Dashboard</h1>
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
          <Box>
            <div>
              <h1 className="subtitle">Backlog Summary</h1>
            </div>
          </Box>
          <Flex>
            {/* INFO CARDS */}
            <div className="insightsCard">
              <div className="insightContent">
                <Grid
                  templateColumns="repeat(5, 1fr)"
                  gap={8}
                  columns={3}
                  spacing={10}
                >
                  <GridItem w="100%" h="20">
                    #BUGS
                  </GridItem>
                </Grid>
              </div>
              <div className="insightContent">
                <Grid
                  templateColumns="repeat(5, 1fr)"
                  gap={8}
                  columns={3}
                  spacing={10}
                >
                  <GridItem w="100%" h="20">
                    #BUGS
                  </GridItem>
                </Grid>
              </div>
              <div className="insightContent">
                <Grid
                  templateColumns="repeat(5, 1fr)"
                  gap={8}
                  columns={3}
                  spacing={10}
                >
                  <GridItem w="100%" h="20">
                    #BUGS
                  </GridItem>
                </Grid>
              </div>
            </div>
          </Flex>
          <Box>
            <div>
              <h1 className="subtitle">Sprint Progress</h1>
            </div>
          </Box>
          <Flex>
            <div className="insightContent">#DOUGHNUT CHART</div>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Dashboard;
