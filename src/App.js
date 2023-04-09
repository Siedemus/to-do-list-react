import Header from "./Header";
import Section from "./Section";
import SubHeader from "./SubHeader";
import Form from "./Form";
import Container from "./Container";

function App() {
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
          />}
      />
    </>
  );
}

export default App;
