import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import uuid from "uuid/v4";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const itemsFromBackend = [
  { id: "1", content: "First task", status: "todo" },
  { id: "2", content: "Second task", status: "done" },
  { id: "3", content: "Third task", status: "inprogress" },
  { id: "4", content: "Fourth task", status: "todo" },
  { id: "5", content: "Fifth task", status: "testing" },
  { id: "6", content: "First task", status: "todo" },
  { id: "7", content: "Second task", status: "done" },
  { id: "8", content: "Third task", status: "inprogress" },
  { id: "9", content: "Fourth task", status: "todo" },
  { id: "10", content: "Fifth task", status: "testing" },
];

let todoArr = [];
let inProgressArr = [];
let testingArr = [];
let doneArr = [];

function sortByStatus(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    switch (tasks[i].status) {
      case "todo": {
        todoArr.push(tasks[i]);
        break;
      }
      case "inprogress": {
        inProgressArr.push(tasks[i]);
        break;
      }
      case "testing": {
        testingArr.push(tasks[i]);
        break;
      }
      case "done": {
        doneArr.push(tasks[i]);
        break;
      }
    }
  }
  console.log(todoArr);
  console.log(inProgressArr);
}

sortByStatus(itemsFromBackend);

//EXAMPLE TO FETCH INFO
// const TasksContainer = () => {
//   const [tasks, setTasks] = useState({});

//   useEffect(() => {
//       function fetchTasks() {
//           fetch("http://localhost:4000/api")
//               .then((res) => res.json())
//               .then((data) => {
//                   console.log(data);
//                   setTasks(data);
//               });
//       }
//       fetchTasks();
//   }, []);

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
// const [tasks, setTaskStatus] = useState(itemsFromBackend);
// const changeTaskStatus = useCallback(
//   (id, status) => {
//     let task = tasks.find(task => task._id === id);
//     const taskIndex = tasks.indexOf(task);
//     task = { ...task, status };
//     let newTasks = update(tasks, {
//       [taskIndex]: { $set: task }
//     });
//     setTaskStatus(newTasks);
//   },
//   [tasks]
// );

const onDragEnd = (result, columns, setColumns) => {
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

function DragNDrop() {
  const [columns, setColumns] = useState(columnsFromBackend);
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
              // changeTaskStatus={changeTaskStatus}
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
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
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
                                    {item.content} {item.status}
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
