import React from "react";
import { Select } from "@chakra-ui/react";

const FilterProject = (props) => {
  const { projectsList, handleChange } = props;
  return (
    <Select placeholder="Select option" onChange={(e) => handleChange(e.target.value)}>
      {projectsList.map((project) => (
        <option key={project.title} value={project._id}>
          {project.title}{" "}
        </option>
      ))}
    </Select>
  );
};

export default FilterProject;
