import React from "react";
import Tasks from "./Tasks";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Form from "./Form"
import Container from "./Container";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "Przejść na Reacta", done: true },
  { id: 2, content: "Wypić wodę", done: false },
];
const hideDoneTasks = false;

function App() {
  return (
    <React.Fragment>
      <Header title={"Lista Zadań"} />
      <Section
        subHeader={<SubHeader title={"Dodaj nowe zadanie"} />}
        form={<Form title={"Dodaj zadanie"} />}
        container={<Container title={"Lista Zadań"} buttons={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} />}
        tasksList={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </React.Fragment>
  );
}

export default App;
