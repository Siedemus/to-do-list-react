import React, { useState } from "react";
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

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };
  
  return (
    <>
      <Header title={"Lista Zadań"} />
      <Section
        subHeader={<SubHeader title={"Dodaj nowe zadanie"} />}
        form={<Form title={"Dodaj zadanie"} />}
      />
      <Section
        container={<Container title={"Lista Zadań"} buttons={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />} />}
        tasksList={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </>
  );
};

export default App;