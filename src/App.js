import Header from "./Header";
import Section from "./Section";
import SubHeader from "./SubHeader";
import Form from "./Form";
import Container from "./Container";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na Reacta", done: true },
    { id: 2, content: "Wypić wodę", done: false },
  ]);

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {...task, done: !task.done}
      }

      return task;
    }))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({...task, done: true})))
  };

  return (
    <>
      <Header />
      <Section
        subHeader={
          <SubHeader
            title={"Dodaj nowe zadanie"}
            extraContent={""}
          />}
        form={<Form />}
      />
      <Section
        container={
          <Container
            subHeader={
              <SubHeader
                title={"Lista Zadań"}
                extraContent={"section__header--list"}
              />}
            buttons={
              <Buttons
                hideDone={hideDone}
                tasks={tasks}
                toggleHideDone={toggleHideDone}
                setAllDone={setAllDone}
              />}
          />}
        tasksList={
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </>
  );
}

export default App;
