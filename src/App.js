import Header from "./Header";
import Section from "./Section";
import SubHeader from "./SubHeader";
import Form from "./Form";
import Container from "./Container";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import { useTasks } from "./useTasks";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    teal: "rgb(0, 128, 128)",
    white: "rgb(255, 255, 255)",
    grey: "rgb(214, 214, 214)",
  },
  breakpoints: {
    mobile: "767",
  },
};

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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
