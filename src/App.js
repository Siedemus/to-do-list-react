import React, { useState } from "react";
import Tasks from "./Tasks";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Form from "./Form"
import Container from "./Container";
import Buttons from "./Buttons";
import Section from "./Section";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na Reacta", done: true },
    { id: 2, content: "Wypić wodę", done: false },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      };
      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })))
  }

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length -1].id +1 : 1
      },
    ])
  }

  return (
    <>
      <Header title={"Lista Zadań"} />
      <Section
        subHeader={<SubHeader title={"Dodaj nowe zadanie"} />}
        form={<Form title={"Dodaj zadanie"} addNewTask={addNewTask}/>}
      />
      <Section
        container={<Container title={"Lista Zadań"} buttons={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone}/>} />}
        tasksList={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
      />
    </>
  );
};

export default App;