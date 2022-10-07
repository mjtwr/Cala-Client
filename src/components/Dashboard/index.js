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
    <div className="summarybacklogCard">
      <Flex>
        <Box p="4">
          <div>
            <p className="comingSoon">Coming Soon...</p>
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
          {/* SUMMARY CARDS */}
          <div className="backlogSummary">
            <Grid templateColumns="repeat(3, 1fr)" gap={6} h="200">
              <div className="backlogSummary">
                <GridItem w="100%">
                  <p className="subtitle-grey">9 USER STORIES</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2621/2621155.png"
                    alt="bug"
                    width="100px"
                  />
                </GridItem>
              </div>
              <div className="backlogSummary">
                <GridItem w="100%">
                  <p className="subtitle-grey"> 13 TASKS</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1390/1390708.png"
                    alt="bug"
                    width="100px"
                  />
                </GridItem>
              </div>
              <div className="backlogSummary">
                <GridItem w="100%">
                  <p className="subtitle-grey"> 5 BUGS</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3540/3540937.png"
                    alt="bug"
                    width="100px"
                  />
                </GridItem>
              </div>
            </Grid>
          </div>
          {/* SUMMARY CARDS */}

          <Box>
            <div>
              <h1 className="subtitle">Sprint Progress</h1>
            </div>
          </Box>
        
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3176/3176353.png"
                alt="doughnutchart"
                width="300"
              />
            </div>
        
        </Box>
      </Flex>
    </div>
  );
};

export default Dashboard;
