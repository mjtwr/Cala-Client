import React from "react";
import {
  Modal,
  Select,
  Component,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormLabel,
  Input,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
} from "@chakra-ui/react";
// import { DatePicker } from "chakra-ui-date-input"; no pude instalarla = error
import { FiPlus } from "react-icons/fi";

const CreateTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  return (
    <>
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
        New Task
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} className="modalContent">
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder="Title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="
              Description"
              />
            </FormControl>

            <FormControl w="100px" mr="10px" mt="20px">
              <Select placeholder="Type">
                <option>Task</option>
                <option>User Story</option>
                <option>Bug</option>
              </Select>
            </FormControl>
            <FormControl w="120px" mr="10px" mt="20px">
              <Select placeholder="Priority">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Select>
            </FormControl>
            <FormControl w="140px" mr="10px" mt="20px">
              <Select placeholder="Status">
                <option>To-Do</option>
                <option>In Progress</option>
                <option>Testing</option>
                <option>Done</option>
              </Select>
            </FormControl>
            {/* <FormControl>
              <DatePicker
                placeholder="Date picker placeholder"
                name="date"
                onChange={(date: string) => console.log(date)}
              />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3}>
              Update
            </Button>
            <Button onClick={onClose} colorScheme="red">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateTask;
