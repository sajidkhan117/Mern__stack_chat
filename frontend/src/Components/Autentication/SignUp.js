import React, { useState } from 'react'
import { Stack, HStack, VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button,  } from '@chakra-ui/react'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { useToast } from '@chakra-ui/react';

const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [ConfirmPassword, setConfirmPassword] = useState()
    const [password, setPassword] = useState()
    const [pics, setPic] = useState()
    const [show, setShow] = useState(false)
    const [loading, setloading] = useState(false)
    const toast = useToast()
    const history = useHistory();


    const handleClick = () => setShow(!show)

    const postDetails = (pics) => {
        setloading(true);
        // console.log(pics);
        if (pics === undefined) {
            toast({
                title: "please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            })
            return;
        }

        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "Pashtoon_Chat_app");
            data.append("cloud_name", "dloes6f7k");
            fetch("https://api.cloudinary.com/v1_1/dloes6f7k/image/upload", {
                method: "post",
                body: data,

            }).then((res) => res.json())
                .then(data => {
                    setPic(data.url.toString());
                    console.log(data.url.toString());
                    setloading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setloading(false);
                })

        }
        else {
            toast({
                title: "please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            })
            setloading(false);
            return;
        }
    }

    const submitHandler = async () => {
        setloading(true);

        if (!name || !email || !password || !ConfirmPassword) {

            toast({
                title: "please fill all the fields!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setloading(false);
            return;
        }
        if (password !== ConfirmPassword) {
            toast({
                title: "password Do not Match!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            }
            const { data } = await axios.post("/api/user", { name, email, password, pics },
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

            setloading(false);

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
            <FormControl id="first-name " isRequired>
                <FormLabel>
                    Name
                </FormLabel>
                <Input
                    placeholder='Enter your Name'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>

            <FormControl id="Email " isRequired>
                <FormLabel>
                    Email
                </FormLabel>
                <Input
                    placeholder='Enter your Email'
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


            <FormControl id="password " isRequired>
                <FormLabel>
                    Password
                </FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder='Confirm  Password '
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem" >
                        <Button h="1.75rem" size="sm" onClick={handleClick}
                        >
                            {show ? "Hide" : "Show"}

                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id="pic">
                <FormLabel>
                    Upload your picture
                </FormLabel>
                <Input type='file'
                    p={1.5}
                    accept='image/*'
                    onChange={(e) => postDetails(e.target.files[0])}
                ></Input>

            </FormControl>

            <Button
                colorScheme='blue'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
                isLoading={loading}
            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default SignUp