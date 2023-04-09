import Header from "./Header";
import Section from "./Section";
import SubHeader from "./SubHeader";
import Form from "./Form";

function App() {
  return (
    <>
      <Header />
      <Section
        subHeader={<SubHeader title={"Dodaj nowe zadanie"} extraContent={""} />}
        form={<Form />}
      />
    </>
  );
}

export default App;
