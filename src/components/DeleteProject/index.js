import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button, 
  IconButton,
} from "@chakra-ui/react";
import {  FiTrash2} from "react-icons/fi";

const DeleteProject = (props) => {
  // console.log('DEL PROJECT PROPS', props)
  const {feature, projectId} = props
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const handleRemoveItem = (e) => {
   const id = e.target.getAttribute("id")
  //  console.log("ID", id)
   props.handleDeleteProject(e, id)
  //  Close popup?
  //  console.log("CLICK")
  };

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
              <Button colorScheme="purple" mr={3}
              id={projectId} onClick={handleRemoveItem} >
                Delete
              </Button>
              <Button colorScheme='red' onClick={onClose}>Cancel</Button> 
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default DeleteProject;
