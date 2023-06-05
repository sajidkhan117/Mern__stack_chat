import { React, useEffect } from 'react'
import { Container, Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from '../Components/Autentication/Login'
import SignUp from '../Components/Autentication/SignUp'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
const Homepage = () => {

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");



  }, [history]);



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
        <Text fontSize='4xl' fontFamily="Work sans" color="black">Secret app </Text>
      </Box>
      <Box color="black" bg="white" w="100%" P={4} borderRadius="lg" borderWidth="1px">

        <Tabs variant='soft-rounded' >
          <TabList mb="1em" mt="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage