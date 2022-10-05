import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Button,
  Box,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export default function CreateProject(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [form, setForm] = useState({
    description: "",
    title: "",
    password: "",
  });
  const { title, description } = form;
  // TODO: add validations
  // const [error, setError] = useState(null);

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    console.log(title, description)
    props.handleCreateProject({title, description})
  }

  return (
    <div>
      <Button
        onClick={onOpen}
        className="button__submit popupModal"
        h="50px"
        w="200px"
        type="submit"
        rightIcon={<FiPlus />}
        colorScheme="purple"
        variant="outline"
      >
        New{" "}
      </Button>
      
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="purple.700">Create Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div>
              <form onSubmit={handleFormSubmission}>
                <FormControl isRequired> 
                  <FormLabel htmlFor="input-title" color="purple.700">Title</FormLabel>
                  <Input id="input-title" type='title' mb="15px"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="input-description" color="purple.700">Description</FormLabel>
                  <Textarea id="input-description" type='textarea' mb="15px"
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                  />
                </FormControl>
                <ModalFooter>
                  <Button colorScheme="purple" mr={3} type="submit" onClick={onClose}>
                    Create
                  </Button>
                  <Button onClick={onClose} colorScheme="red">
                    Cancel
                  </Button>
                </ModalFooter>
              </form>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
