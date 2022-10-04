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
import { FiPlus, FiEdit, FiTrash2} from "react-icons/fi";

const DeletePopUp = (props) => {
    const {feature} = props
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  return (
    <>
    <div>
    
        <IconButton
          aria-label="delete"
          onClick={onOpen}
          type="submit"
          color="red"
          backgroundColor="#FAF5FF"
          icon={<FiTrash2 />}
          margin-top='-30px'
        />

        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete {feature}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <span>Are you sure you want to delete this {feature}?</span>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="purple" mr={3}>
                Delete
              </Button>
              <Button colorScheme='red' onClick={onClose}>Cancel</Button> {/* onClick={deleteProject}*/}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default DeletePopUp;
