import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormLabel,
  Input,
  Select,
  ModalCloseButton,
  useDisclosure,
  Button,
  IconButton,
  FormControl,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";

const EditTask = (props) => {
  const {color} = props
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  return (
    <>
      <div>
        <IconButton
          aria-label="Edit"
          onClick={onOpen}
          type="submit"
          backgroundColor={color}
          icon={<FiEdit />}
          margin-top="-30px"
        />

        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New Task</ModalHeader>
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
                Create
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default EditTask;
