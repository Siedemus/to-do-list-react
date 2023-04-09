import Header from "./Header";
import Section from "./Section";
import SubHeader from "./SubHeader";
import Form from "./Form";
import Container from "./Container";
import Buttons from "./Buttons";

function App() {
  const tasks = [
    { id: 1, content: "Przejść na Reacta", done: true },
    { id: 2, content: "Wypić wodę", done: false },
  ];

  const hideDone = false;

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
              />}
          />}
      />
    </>
  );
}

export default App;
