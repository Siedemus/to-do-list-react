import Header from "../../../common/Header";
import Section from "../../../common/Section";
import SubHeader from "../../../common/SubHeader";
import Container from "../../../common/Container";
import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import FetchButton from "./FetchButton";

const TasksPage = () => {
  return (
    <>
      <Header title={"Lista Zadań"} />
      <Section
        title={
          <SubHeader
            isMajor={true}
            title={"Dodaj nowe zadanie"}
            extraContent={false}
            extraBody={<FetchButton />}
          />
        }
        body={<Form />}
      />
      <Section
        body={
          <Container
            subHeader={
              <SubHeader
                isMajor={false}
                title={"Lista Zadań"}
                extraContent={true}
              />
            }
            buttons={<Buttons />}
          />
        }
        extraBody={<TasksList />}
      />
    </>
  );
};

export default TasksPage;