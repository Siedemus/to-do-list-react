import { useSelector } from "react-redux";
import { Button, Content, Item, List } from "./styled";
import { selectTasks } from "../../tasksSlice";

const TasksList = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => toggleTaskDone(task.id)} done>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>{task.content}</Content>
          <Button onClick={() => removeTask(task.id)} remove>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
