import React, { useEffect, useState } from "react";
import {
  FormControl,
  Textarea,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

export default function CreateUpdateProjectForm(props) {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const { title, description } = form;

  useEffect(() => {
    if (props.project !== undefined) {
      setForm({title: props.project.title, description: props.project.description})
    }
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    let projectId = props.project ? props.project._id : 0
    props.onSubmitProjectForm({ title: title, description: description, _id: projectId });
  }

  return (
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
        <FormControl isRequired>
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
        </FormControl>
        <FormControl>
          <Button colorScheme="purple" mr={3} type="submit">
            {props.action}
          </Button>
          <Button colorScheme="red" onClick={props.onCloseForm}>Cancel</Button>
        </FormControl>
      </form>
    </div>
  );
}
