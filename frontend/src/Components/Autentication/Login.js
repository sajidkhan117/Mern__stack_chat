import React, { useState } from 'react'
import { Stack, HStack, VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useHistory } from "react-router-dom";



const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [show, setShow] = useState(false)
  const [Loading, setLoading] = useState(false)


  const toast = useToast();
  const history = useHistory();


  const handleClick = () => setShow(!show)

  // const postDetails = (pics) => {

  // }

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "please fill all the fields!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      }
      const { data } = await axios.post("/api/user/login", { email, password, },
        config
      );
      toast({
        title: "Registration Successful!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data))

      setLoading(false);

      history.push('/chats')
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  }


  return (
    <VStack spacing="5px" color="black">


      <FormControl id="Email " isRequired>
        <FormLabel>
          Email
        </FormLabel>
        <Input
          placeholder='Enter your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}

        />
      </FormControl>

      <FormControl id="password " isRequired>
        <FormLabel>
          Password
        </FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder='Enter your Password '
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem" >
            <Button h="1.75rem" size="sm" onClick={handleClick}
            >
              {show ? "Hide" : "Show"}

            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>





      <Button
        colorScheme='blue'
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={Loading}
      >
        Login
      </Button>

      <Button
        variant="solid"
        colorScheme='red'
        width="100%"
        onClick={() => {
          setEmail("guest@gmail.com");
          setPassword("123456")
        }}
      >
        Guest user Credentials
      </Button>
    </VStack>
  )
}

export default Login 