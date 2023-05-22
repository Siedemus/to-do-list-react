import Header from "../common/Header";
import Section from "../common/Section";
import SubHeader from "../common/SubHeader";
import Form from "./tasks/Form";
import Container from "../common/Container";
import Buttons from "./tasks/Buttons";
import TasksList from "./tasks/TasksList";
import { useTasks } from "../useTasks";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";

export const Tasks = () => {
  const {
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <>
      <Header />
      <Section
        subHeader={
          <SubHeader title={"Dodaj nowe zadanie"} extraContent={false} />
        }
        form={<Form addNewTask={addNewTask} />}
      />
      <Section
        container={
          <Container
            subHeader={<SubHeader title={"Lista Zadań"} extraContent={true} />}
            buttons={
              <Buttons

                setAllDone={setAllDone}
              />
            }
          />
        }
        tasksList={
          <TasksList
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </>
  );
};
