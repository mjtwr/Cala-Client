
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
import CreateUpdateProjectForm from "../CreateUpdateProjectForm";

const UpdateProject = (props) => {
  const { color } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  const onSubmitProjectForm = (res) => {
    console.log("got project data from form: ", res)
    onClose()
    props.handleUpdateProject(res)
  };

  const onCloseProjectForm = () => {
    onClose()
  };

  return (
    <>
      <div>
        <IconButton
          aria-label="Edit"
          onClick={onOpen}
          type="submit"
          backgroundColor="white"
          icon={<FiEdit />}
        />
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} className="modalContent">
                <CreateUpdateProjectForm action="Update" project={props.project} onSubmitProjectForm={onSubmitProjectForm} onCloseForm={onCloseProjectForm}></CreateUpdateProjectForm>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default UpdateProject;
