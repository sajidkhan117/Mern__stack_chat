import React from 'react'
import { Container, Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from '../Components/Autentication/Login'
import SignUp from '../Components/Autentication/SignUp'
const Homepage = () => {
  return (
    <Container mazW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize='4xl' fontFamily="Work sans" color="black">Pushtoon chat app</Text>
      </Box>
      <Box color="black" bg="white" w="100%" P={4} borderRadius="lg" borderWidth="1px">

        <Tabs variant='soft-rounded' >
          <TabList mb="1em" mt="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <SignUp/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage