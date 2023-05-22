import Header from "../common/Header";
import Section from "../common/Section";
import SubHeader from "../common/SubHeader";
import Form from "./tasks/Form";
import Container from "../common/Container";
import Buttons from "./tasks/Buttons";
import TasksList from "./tasks/TasksList";

export const Tasks = () => {
  return (
    <>
      <Header />
      <Section
        subHeader={
          <SubHeader title={"Dodaj nowe zadanie"} extraContent={false} />
        }
        form={<Form />}
      />
      <Section
        container={
          <Container
            subHeader={<SubHeader title={"Lista Zadań"} extraContent={true} />}
            buttons={<Buttons />}
          />
        }
        tasksList={<TasksList />}
      />
    </>
  );
};
