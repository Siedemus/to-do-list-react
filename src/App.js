import Header from "./Header";
import Section from "./Section";
import SubHeader from "./SubHeader";

function App() {
  return (
    <>
      <Header />
      <Section subHeader={<SubHeader title={"Dodaj nowe zadanie"} extraContent={""}/>} />
    </>
  );
}

export default App;
