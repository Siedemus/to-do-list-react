import Header from "./Header";
import Section from "./Section";
import SubHeader from "./SubHeader";
import Form from "./Form";
import Container from "./Container";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import { useTasks } from "./useTasks";

function App() {
  const {
    tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <>
      <Header />
      <Section
        subHeader={<SubHeader title={"Dodaj nowe zadanie"} extraContent={false} />}
        form={<Form addNewTask={addNewTask} />}
      />
      <Section
        container={
          <Container
            subHeader={
              <SubHeader
                title={"Lista Zadań"}
                extraContent={true}
              />
            }
            buttons={
              <Buttons
                hideDone={hideDone}
                tasks={tasks}
                toggleHideDone={toggleHideDone}
                setAllDone={setAllDone}
              />
            }
          />
        }
        tasksList={
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </>
  );
}

export default App;
