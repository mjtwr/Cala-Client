import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import CreateUpdateProjectForm from "../CreateUpdateProjectForm";

export default function CreateProject(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const onSubmitProjectForm = (res) => {
    onClose()
    props.handleCreateProject(res);
  };

  const onCloseProjectForm = () => {
    onClose()
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
              <CreateUpdateProjectForm action="Create" project={props.project} onSubmitProjectForm={onSubmitProjectForm} onCloseForm={onCloseProjectForm}></CreateUpdateProjectForm>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
