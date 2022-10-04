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
  FormControl,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";


const ProjectForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}   className="button__submit popupModal"
              h='50px' w='200px'
              type="submit"
              rightIcon={<FiPlus />}
              colorScheme="purple"
              variant="outline">New </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder="title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Goal</FormLabel>
              <Input placeholder="description" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectForm;
