import React from 'react'
import ProjectsTable from '../components/ProjectsTable'

const Projects = (props) => {
  let projectsList = [
    {
      title: "mj",
      description: "goal",
      date: "10/20l",
      user: "username",
      id: 1,
    },
    {
      title: "mj",
      description: "goal",
      date: "10/20l",
      user: "username",
      id: 2,
    }, {
      title: "mj",
      description: "goal",
      date: "10/20l",
      user: "username",
      id: 3,
    },
    {
      title: "mj",
      description: "goal",
      date: "10/20l",
      user: "username",
      id: 4,
    }
  ];

  console.log(props)
  return (
    <ProjectsTable projectList={projectsList}/>
  )
}

export default Projects