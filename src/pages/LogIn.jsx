import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import {FormControl,FormLabel, FormErrorMessage,Heading, Input, Button, Box, Center, useColorModeValue} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'


export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div>
    <Center py={8}>
      <Box
          role={'group'}
          p={3}
          maxW={'500px'}
          height='450px'
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
        <div>
          <Heading color="purple.700" mt="20px" mb="30px">Login</Heading>
          <form onSubmit={handleFormSubmission} className="signup__form">
              <FormControl isRequired pl="30px" pr="30px">
                  <FormLabel htmlFor="input-username" color="purple.700">Username</FormLabel>
                  <Input id="input-username" type='text' mb="15px"
                  name="username"
                  color='#D6BCFA'
                  placeholder='Username'
                  _placeholder={{ color: 'inherit' }}
                  value={username}
                  onChange={handleInputChange}
                  required/>
                </FormControl>
                <FormControl isRequired pl="30px" pr="30px">
                  <FormLabel htmlFor="input-password" color="purple.700">Password</FormLabel>
                  <Input id="input-password" type='password' mb="15px"
                  name="password"
                  color='#D6BCFA'
                  placeholder='Password'
                  _placeholder={{ color: 'inherit' }}
                  value={password}
                  onChange={handleInputChange}
                  required
                  minLength="8"
                  />
                </FormControl>

            {error && (
              <div className="error-block">
                <p>There was an error submiting the form:</p>
                <p>{error.message}</p>
              </div>
            )}

            <Button className="button__submit" type="submit" rightIcon={<ArrowForwardIcon />} colorScheme='purple' variant='outline'>
                  Submit
                </Button>
          </form>
      </div>
      </Box>
    </Center>
    </div>
  );
}
