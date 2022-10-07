import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Select,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormLabel,
  Input,
  Textarea,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
} from "@chakra-ui/react";
// import { DatePicker } from "chakra-ui-date-input"; no pude instalarla = error
import { FiPlus } from "react-icons/fi";

export default function CreateTask(props) {
  // console.log("RECEIVING PROPS CREATETASK:", props)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [task, setTask] = useState("task");
  const initialRef = React.useRef(null);
  const [form, setForm] = useState({
    description: "",
    title: "",
    status: "todo",
    type: "task",
    priority: "low",
  });
  const { title, description, status, type, priority } = form;
  // TODO: add validations
  // const [error, setError] = useState(null);

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    props.handleCreateTask({ title, status, description, type, priority });
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
        Add Task{" "}
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="purple.700">Create Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div>
              <form onSubmit={handleFormSubmission}>
                <FormControl isRequired>
                  <FormLabel htmlFor="input-title" color="purple.700">
                    Title
                  </FormLabel>
                  <Input
                    id="input-title"
                    type="title"
                    mb="15px"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="input-description" color="purple.700">
                    Description
                  </FormLabel>
                  <Textarea
                    id="input-description"
                    type="textarea"
                    mb="15px"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                  />
                </FormControl>{" "}
                <FormControl isRequired w="140px" mr="10px" mt="20px">
                  <Select
                    placeholder="Type"
                    value={type}
                    name="type"
                    onChange={handleInputChange}
                  >
                    <option value="task">Task</option>
                    <option value="user story">User Story</option>
                    <option value="bug">Bug</option>
                  </Select>
                </FormControl>
                <FormControl w="140px" mr="10px" mt="20px">
                  <Select
                    placeholder="Status"
                    value={status}
                    name="status"
                    onChange={handleInputChange}
                  >
                    <option value="todo">To-Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="testing">Testing</option>
                    <option value="done">Done</option>
                  </Select>
                </FormControl>
                <FormControl w="140px" mr="10px" mt="20px">
                  <Select
                    placeholder="Priority"
                    value={priority}
                    name="priority"
                    onChange={handleInputChange}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </Select>
                </FormControl>
                <ModalFooter>
                  <Button
                    colorScheme="purple"
                    mr={3}
                    type="submit"
                    onClick={onClose}
                  >
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
