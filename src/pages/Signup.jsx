import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Heading,
  Input,
  Button,
  Box,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // function PasswordInput() {
  //   const [show, setShow] = React.useState(false)
  //   const handleClick = () => setShow(!show)
  // }

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      email,
      password,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div>
      <Center py={8}>
        <Box
          role={"group"}
          p={3}
          maxW={"500px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <div>
            <Heading color="purple.700" mt="20px" mb="30px">
              Sign Up
            </Heading>
            <form onSubmit={handleFormSubmission} className="auth__form">
              <FormControl isRequired>
                <FormLabel htmlFor="input-email" color="purple.700">
                  Email address
                </FormLabel>
                <Input
                  id="input-email"
                  type="email"
                  mb="15px"
                  name="email"
                  color="#D6BCFA"
                  placeholder="example@email.com"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="input-username" color="purple.700">
                  Username
                </FormLabel>
                <Input
                  id="input-username"
                  type="text"
                  mb="15px"
                  name="username"
                  color="#D6BCFA"
                  placeholder="Username"
                  value={username}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="input-password">Password</FormLabel>

                <Input
                  id="input-password"
                  type="password"
                  mb="15px"
                  name="password"
                  color="#D6BCFA"
                  placeholder="Password"
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
              <Button
                className="button__submit"
                type="submit"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="purple"
                variant="outline"
              >
                Submit
              </Button>
            </form>
          </div>
        </Box>
      </Center>
    </div>
  );
}
