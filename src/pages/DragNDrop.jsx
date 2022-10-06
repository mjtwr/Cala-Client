import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getSprintsTaks, getAllProjects } from "../services/services";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function DragNDrop() {
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [todoArr, setTodoArr] = useState([]);
  const [inProgressArr, setInProgressArr] = useState([]);
  const [testingArr, setTestingArr] = useState([]);
  const [doneArr, setDoneArr] = useState([]);
  const [projectsList, setProjectsList] = useState([]);

  //   const [taskStatus, setTaskStatus] = useState(itemsFromBackend);
  //   const changeTaskStatus = useCallback(
  //     (id, status) => {
  //       let task = tasks.find((task) => task._id === id);
  //       const taskIndex = tasks.indexOf(task);
  //       task = { ...task, status };
  //       let newTasks = update(tasks, {
  //         [taskIndex]: { $set: task },
  //       });
  //       setTaskStatus(newTasks);
  //     },
  //     [tasks]
  //   );
  const changeTaskStatus = (id, status) => {
    console.log(id, status);
  };


  useEffect(() => {
    getAllProjects()
      .then((response) => setProjectsList(response.data))
      .catch((err) => console.log(err));
  }, []);

  function sortByStatus(tasks) {
    for (let i = 0; i < tasks.length; i++) {
      switch (tasks[i].status) {
        case "todo": {
          setTodoArr((initialValue) => [...initialValue, tasks[i]]);
          break;
        }
        case "inprogress": {
          setInProgressArr((initialValue) => [...initialValue, tasks[i]]);
          break;
        }
        case "testing": {
          setTestingArr((initialValue) => [...initialValue, tasks[i]]);
          break;
        }
        case "done": {
          setDoneArr((initialValue) => [...initialValue, tasks[i]]);
          break;
        }
        default: {
          setTodoArr((initialValue) => [...initialValue, tasks[i]]);
          break;
        }
      }
    }
  }

  useEffect(() => {
    function fetchTasks() {
      getSprintsTaks("633e14bda590e1aeaaf66bee").then((res) => {
        sortByStatus(res.data.tasks);
        // setTasks(res.data.tasks);
      });
    }
    fetchTasks();
  }, []);

  useEffect(() => {
    const columnsFromBackend = {
      [uuidv4()]: {
        name: "To do",
        items: todoArr,
      },
      [uuidv4()]: {
        name: "In Progress",
        items: inProgressArr,
      },
      [uuidv4()]: {
        name: "Testing",
        items: testingArr,
      },
      [uuidv4()]: {
        name: "Done",
        items: doneArr,
      },
    };
    setColumns(columnsFromBackend);
  }, [doneArr, todoArr, inProgressArr, testingArr]);

  const onDragEnd = (result, columns, setColumns) => {
    console.log(result, columns, setColumns);
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={columnId}
              changeTaskStatus={changeTaskStatus}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }} changeTaskStatus>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {column.items.map((item, index) => {
                          console.log("item", item);
                          return (
                            <Draggable
                              key={item._id}
                              draggableId={item._id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.title} {item.status}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default DragNDrop;
