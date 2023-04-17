import Header from "./Header";
import Section from "./Section";
import SubHeader from "./SubHeader";
import Form from "./Form";
import Container from "./Container";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [hideDone, setHideDone] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }

      return task;
    }))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })))
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: !!tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content,
        done: false,
      }])
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
        form={<Form addNewTask={addNewTask} />}
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
