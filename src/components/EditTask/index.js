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
  ModalCloseButton,
  useDisclosure,
  Button,
  IconButton,
  FormControl,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";

const EditTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  return (
    <>
      <div>
        <IconButton
          aria-label="Edit"
          onClick={onOpen}
          type="submit"
          backgroundColor="#FAF5FF"
          icon={<FiEdit />}
          margin-top="-30px"
        />

        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input ref={initialRef} placeholder="title" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input placeholder="description" />
              </FormControl>

            
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
