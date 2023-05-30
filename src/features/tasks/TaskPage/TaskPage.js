import { useSelector } from "react-redux";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import SubHeader from "../../../common/SubHeader";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <>
      <Header title={"Szczegóły zadania"} />
      <Section
        title={
          <SubHeader
            isMajor={true}
            title={task ? task.content : "Nie znaleziono takiego zadania 🤯"}
          />
        }
        body={
          <SubHeader
            extraContent={true}
            title={
              task
                ? `Ukończono Zadanie: ${task.done ? "✅" : "❌"}`
                : "Karamba! 💥"
            }
          />
        }
      />
    </>
  );
};

export default TaskPage;
